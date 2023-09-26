import { getAllProducts } from "@/services/productServices";

export default function handler(req, res, next) {
  const products = getAllProducts();
  res.status(200).json(products);
}
