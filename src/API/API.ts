import axios from "axios";

const instance = axios.create({
  baseURL: 'https://dummyjson.com/',
})
//API
export const API = {
  getProducts(params: any) {
    return instance.get<ResponseType>('products/',
    {
      params: params
    })
  }
}

export type ResponseType = {
  products: ProductType[]
  total: number;
  skip: number;
  limit: number;
}

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
