import { account } from './appwrite'
import { ID } from 'appwrite'

export async function signUp(email: string, password: string, name: string) {
  const user = await account.create(ID.unique(), email, password, name)
  await account.createEmailPasswordSession(email, password)
  return user
}

export async function signIn(email: string, password: string) {
  return account.createEmailPasswordSession(email, password)
}

export async function signOut() {
  return account.deleteSession('current')
}

export async function getUser() {
  try {
    return await account.get()
  } catch {
    return null
  }
}
