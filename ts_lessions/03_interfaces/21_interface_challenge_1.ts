/*
Challenge 1: Define a Review Interface - Create an interface for product reviews with:
    id: string
    productId: string
    rating: number (1-5)
    title: string
    comment: optional string
    createdAt: Date
    helpful: number (vote count)

*/

// Solution
interface Review {
  id: string;
  productId: string;
  rating: number;
  title: string;
  comment?: string;
  createdAt: Date;
  helpful: number;
}
