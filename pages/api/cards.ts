import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CardsData[]>
) {
  res.status(200).json(data)
}

const data: CardsData[] = [
  {
    "img": "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=1440",
    "title": "Outdoor getaways"
  },
  {
    "img": "https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=1440",
    "title": "Unique stays"
  },
  {
    "img": "https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=1440",
    "title": "Entire homes"
  },
  {
    "img": "https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=1440",
    "title": "Pet allowed"
  }
]