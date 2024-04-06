export interface Category {
  image: string;
  isBlocked: boolean;
  isDeleted: boolean;
  name: string;
  name_ar: string;
  _id: string;
}

export interface UserAddress {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  city: string;
  zipcode: string;
  phone: string;
  user_id: any;
}
