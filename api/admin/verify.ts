import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createHmac } from 'crypto'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const adminPassword = process.env.ADMIN_PASSWORD

  if (!adminPassword) {
    return res.status(500).json({ error: 'Server configuration error' })
  }

  const cookieHeader = req.headers.cookie || ''
  const cookies = Object.fromEntries(
    cookieHeader.split(';').map(c => {
      const [k, ...v] = c.trim().split('=')
      return [k.trim(), decodeURIComponent(v.join('='))]
    })
  )

  const session = cookies['ssp_session']
  const tokenFromQuery = (req.query.token as string) || ''
  const tokenToVerify = session || tokenFromQuery

  if (!tokenToVerify) {
    return res.status(401).json({ valid: false })
  }

  try {
    const decoded = Buffer.from(tokenToVerify, 'base64').toString('utf-8')
    const parts = decoded.split(':')
    if (parts.length !== 3) return res.status(401).json({ valid: false })

    const [timestamp] = parts
    const payload = `${timestamp}:${parts[1]}`
    const expectedToken = createHmac('sha256', adminPassword).update(payload).digest('hex')

    if (parts[2] !== expectedToken) {
      return res.status(401).json({ valid: false })
    }

    const age = Date.now() - parseInt(timestamp, 10)
    if (age > 24 * 60 * 60 * 1000) {
      return res.status(401).json({ valid: false })
    }

    return res.status(200).json({ valid: true })
  } catch {
    return res.status(401).json({ valid: false })
  }
}
