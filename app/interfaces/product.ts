export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice?: number | null;
  image?: {
    url: string;
    alt: string;
  };
  badge?: string;
  rating?: number;
  tags?: string[];
}
