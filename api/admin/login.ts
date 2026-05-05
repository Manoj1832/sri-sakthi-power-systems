import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createHmac, randomBytes } from 'crypto'

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { password } = req.body || {}
  const adminPassword = process.env.ADMIN_PASSWORD

  if (!adminPassword) {
    return res.status(500).json({ error: 'Server configuration error' })
  }

  if (!password || typeof password !== 'string') {
    return res.status(400).json({ error: 'Password is required' })
  }

  if (password !== adminPassword) {
    return res.status(401).json({ error: 'Invalid password' })
  }

  const timestamp = Date.now()
  const payload = `${timestamp}:${randomBytes(16).toString('hex')}`
  const token = createHmac('sha256', adminPassword).update(payload).digest('hex')
  const session = Buffer.from(`${payload}:${token}`).toString('base64')

  res.setHeader('Set-Cookie', `ssp_session=${session}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`)
  return res.status(200).json({ success: true, token: session })
}
