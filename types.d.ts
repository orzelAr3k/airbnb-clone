interface ExploreData {
  img: string;
  location: string;
  distance: string;
}
interface CardsData {
  img: string;
  title: string;
}

interface SearchResult {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
}

interface RouterSearch {
  location: string;
  startDate: string;
  endDate: string;
  noOfGuest: string;
}