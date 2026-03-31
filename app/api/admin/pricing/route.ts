import { createClient } from "@libsql/client";
import { NextRequest, NextResponse } from "next/server";

function getClient() {
  return createClient({
    url: process.env.TURSO_DATABASE_URL || '',
    authToken: process.env.TURSO_AUTH_TOKEN || '',
  });
}

export async function GET() {
    const client = getClient();
  try {
    const result = await client.execute(`
      SELECT 
        p.*,
        GROUP_CONCAT(f.feature) as features_list
      FROM pricing_plans p
      LEFT JOIN pricing_plans_features f ON p.id = f._parent_id
      GROUP BY p.id
      ORDER BY p.sort_order ASC, p.id ASC
    `);

    const plans = result.rows.map(row => ({
      id: row.id,
      planType: row.plan_type,
      name: row.name,
      tagline: row.tagline,
      price: row.price,
      period: row.period,
      popular: row.popular === 1,
      active: row.active === 1,
      features: row.features_list ? String(row.features_list).split(',') : [],
      ctaText: row.cta_text,
      ctaLink: row.cta_link,
      sortOrder: row.sort_order,
    }));

    return NextResponse.json(plans);
  } catch (error) {
    console.error('Error fetching pricing plans:', error);
    return NextResponse.json({ error: 'Failed to fetch pricing plans' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const client = getClient();
    const data = await request.json();
    
    // Insert pricing plan
    const result = await client.execute({
      sql: `
        INSERT INTO pricing_plans (
          plan_type, name, tagline, price, period, popular, active, 
          cta_text, cta_link, sort_order, updated_at, created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      args: [
        data.planType,
        data.name,
        data.tagline,
        data.price,
        data.period || 'Per Month*',
        data.popular ? 1 : 0,
        data.active ? 1 : 0,
        data.ctaText || 'Order Now',
        data.ctaLink,
        data.sortOrder || 0,
        new Date().toISOString(),
        new Date().toISOString(),
      ],
    });

    const planId = result.lastInsertRowid;

    // Insert features
    if (data.features && data.features.length > 0) {
      for (let i = 0; i < data.features.length; i++) {
        await client.execute({
          sql: `INSERT INTO pricing_plans_features (_order, _parent_id, feature) VALUES (?, ?, ?)`,
          args: [i, planId, data.features[i]],
        });
      }
    }

    return NextResponse.json({ id: planId, success: true });
  } catch (error) {
    console.error('Error creating pricing plan:', error);
    return NextResponse.json({ error: 'Failed to create pricing plan' }, { status: 500 });
  }
}