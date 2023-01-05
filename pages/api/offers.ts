import type { NextApiRequest, NextApiResponse } from 'next'
import { offersDB } from '@app/libs/mongo';


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  switch (req.method) {
    case 'POST':
      res.status(202).json({ name: 'Arek' });
      console.log({ body: req.body, param: req.query })
      break;
    case 'GET':
      res.status(200).json({ method: 'GET' })
      break;
  }
}
