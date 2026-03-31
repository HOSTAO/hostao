import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Vercel provides country via x-vercel-ip-country header
  const country = request.headers.get('x-vercel-ip-country') || ''
  const pathname = request.nextUrl.pathname

  // Skip redirects for static files
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Indian visitors on hostao.com → redirect to hostao.in
  if (country === 'IN') {
    const url = new URL(pathname + request.nextUrl.search, 'https://hostao.in')
    return NextResponse.redirect(url, 302)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images/).*)',
  ],
}
