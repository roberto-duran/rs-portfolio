import {NextApiRequest, NextApiResponse} from 'next'
import {db} from '../../lib/db'
import {withMethods} from '../../lib/api-middlewares/with-methods'

async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'GET') {
    try {
      const socials = await db.social.findMany({
        select: {
          id: true,
          title: true,
          url: true,
          createdAt: true
        },
        orderBy: {
          createdAt: 'desc'
        }
      })

      return res.json(socials)
    } catch (error) {
      return res.status(500).end()
    }
  }
}

export default withMethods(['GET'], handler)
