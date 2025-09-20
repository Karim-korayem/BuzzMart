export interface WishlistItem {
  _id: string;
  id: string;
  title: string;
  description: string;
  imageCover: string;
  images: string[];
  price: number;
  quantity: number;
  sold: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  slug: string;
  createdAt: string;
  updatedAt: string;
  __v: number;

  brand: {
    _id: string;
    name: string;
    slug: string;
    image: string;
  };

  category: {
    _id: string;
    name: string;
    slug: string;
    image: string;
  };

  subcategory: {
    _id: string;
    name: string;
    slug: string;
    category: string;
  }[];
}

export interface WishlistResponse {
  count: number;
  data: WishlistItem[];
}
