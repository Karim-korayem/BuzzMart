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

export interface ProductDetails {
	_id: string;
	id: string;
	title: string;
	slug: string;
	description: string;
	quantity: number;
	price: number;
	imageCover: string;
	images: string[];
	category: Category;
	brand: Brand;
	ratingsAverage: number;
	ratingsQuantity: number;
	sold: number;
	subcategory: Subcategory[];
	createdAt: string;
	updatedAt: string;
	reviews: any[];
	__v: number;
}