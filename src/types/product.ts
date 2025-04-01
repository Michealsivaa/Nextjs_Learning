export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    thumbnail: string;
    images: string[];
    brand: string;
    category: string;
    rating: number;
    stock: number;
    discountPercentage?: number;
  }
  
  export interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  }