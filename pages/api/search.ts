import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchResult[]>
) {
  res.status(200).json(data)
}

const data: SearchResult[] = [
  {
    "img": "https://a0.muscache.com/im/pictures/e2e2bf3d-cb57-4ef0-9076-1571500da682.jpg?im_w=1440",
    "location": "Private room in center of London",
    "title": "Stay at this spacious Edwardian House",
    "description": "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
    "star": 4.73,
    "price": "£30 / night",
    "total": "£117 total",
    "long": -0.0022275,
    "lat": 51.5421655
  },
  {
    "img": "https://a0.muscache.com/im/pictures/e2e2bf3d-cb57-4ef0-9076-1571500da682.jpg?im_w=1440",
    "location": "Private room in center of London",
    "title": "Independant luxury studio apartment",
    "description": "2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen",
    "star": 4.3,
    "price": "£40 / night",
    "total": "£157 total",
    "long": -0.095091,
    "lat": 51.48695
  },
  {
    "img": "https://a0.muscache.com/im/pictures/e2e2bf3d-cb57-4ef0-9076-1571500da682.jpg?im_w=1440",
    "location": "Private room in center of London",
    "title": "London Studio Apartments",
    "description": "4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine",
    "star": 3.8,
    "price": "£35 / night",
    "total": "£207 total",
    "long": -0.135638,
    "lat": 51.521916
  },
  {
    "img": "https://a0.muscache.com/im/pictures/e2e2bf3d-cb57-4ef0-9076-1571500da682.jpg?im_w=1440",
    "location": "Private room in center of London",
    "title": "30 mins to Oxford Street, Excel London",
    "description": "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
    "star": 4.1,
    "price": "£55 / night",
    "total": "£320 total",
    "long": -0.069961,
    "lat": 51.472618
  },
  {
    "img": "https://a0.muscache.com/im/pictures/e2e2bf3d-cb57-4ef0-9076-1571500da682.jpg?im_w=1440",
    "location": "Private room in center of London",
    "title": "Spacious Peaceful Modern Bedroom",
    "description": "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning",
    "star": 5.0,
    "price": "£60 / night",
    "total": "£450 total",
    "long": -0.08472,
    "lat": 51.510794
  },
  {
    "img": "https://a0.muscache.com/im/pictures/e2e2bf3d-cb57-4ef0-9076-1571500da682.jpg?im_w=1440",
    "location": "Private room in center of London",
    "title": "The Blue Room In London",
    "description": "2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine",
    "star": 4.23,
    "price": "£65 / night",
    "total": "£480 total",
    "long": -0.094116,
    "lat": 51.51401
  },
  {
    "img": "https://a0.muscache.com/im/pictures/e2e2bf3d-cb57-4ef0-9076-1571500da682.jpg?im_w=1440",
    "location": "Private room in center of London",
    "title": "5 Star Luxury Apartment",
    "description": "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
    "star": 3.85,
    "price": "£90 / night",
    "total": "£650 total",
    "long": -0.109889,
    "lat": 51.521245
  }
]