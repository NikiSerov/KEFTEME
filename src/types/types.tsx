export interface Product {
  id: number;
  name: string;
  price: number;
  color: string;
  description: string;
  size: number;
  type: string;
  picture: string;
  quantity?: number;
}

export interface Color {
  id: string;
  color: string;
}

export interface Size {
  id: string;
  size: number;
}

export interface Shoetype {
  id: string;
  name: string;
}

export interface Order {
  id: string;
  status: string;
  date: string;
  sum: number;
  products: Array<Product & { quantity: number }>;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  id?: number;
  password?: string;
}

export interface Filters {
  colors: Color[];
  sizes: Size[];
  types: Shoetype[];
}

export interface Cart {
  products: Product[];
  sum: number;
}

export interface Input {
  placeHolder: string;
  name: string;
  type?: string;
}

export interface DeliveryOption {
  value: string;
  label: string;
}

// API TYPES

export interface CreateOrderResponse {
  statusCode: number;
  message: string;
}

export interface RegistrationResponse {
  statusCode: number;
  message: string;
}

export interface LogInResponse {
  access_token: string;
  user: User;
}

export interface ProductsResponse {
  data: Product[];
  total: number;
}
