import { Client, Account, Databases } from 'appwrite'
import { Client as ServerClient, Databases as ServerDatabases, Users } from 'node-appwrite'

// --- Client SDK (browser) ---
const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)

export const account = new Account(client)
export const databases = new Databases(client)
export { client }

// --- Server SDK (API routes / server components) ---
const serverClient = new ServerClient()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
  .setKey(process.env.APPWRITE_API_KEY!)

export const serverDatabases = new ServerDatabases(serverClient)
export const serverUsers = new Users(serverClient)
export { serverClient }

// --- Constants ---
export const DATABASE_ID = process.env.APPWRITE_DATABASE_ID || 'main'

export const COLLECTIONS = {
  USERS: 'users',
  PLANS: 'plans',
  DOMAINS: 'domains',
  TICKETS: 'tickets',
  KNOWLEDGE_BASE: 'knowledge-base',
  ANNOUNCEMENTS: 'announcements',
  PARTNERS: 'partners',
  SUBSCRIPTIONS: 'subscriptions',
} as const
