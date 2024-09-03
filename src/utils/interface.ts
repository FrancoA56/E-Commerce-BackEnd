export interface ProductInput {
  name: string;
  code: string;
  price: number;
  stock: number;
  category: number[];
  label: number[];
  brand: number;
  image: string;
  isDisable: boolean;
  gallery: string[];
  releasedAt: string;
  shortDescription: string;
  longDescription: string;
  instructions: string;
}

export interface Review {
  message: string;
  rating: number;
}

export interface UserInfo {
  email: string;
  name: string;
}

export interface LabelInput {
  name: string;
  isDisable?: boolean;
}

export interface CategoryInput {
  name: string;
  isDisable?: boolean;
}

export interface BrandInput {
  name: string;
  isDisable?: boolean;
}
