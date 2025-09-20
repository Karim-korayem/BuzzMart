export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface CartProduct {
  _id: string;
  count: number;
  price: number;
  product: {
    _id: string;
    id: string;
    title: string;
    imageCover: string;
    quantity: number;
    ratingsAverage: number;
    brand: Brand;
    category: Category;
    subcategory: Subcategory[];
  };
}

export interface CartData {
  status: string;
  cartId: string;
  numOfCartItems: number;
  data: {
    _id: string;
    cartOwner: string;
    products: CartProduct[];
    totalCartPrice: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}
