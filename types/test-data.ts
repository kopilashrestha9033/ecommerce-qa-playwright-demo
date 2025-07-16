export interface UserData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  
  export interface ShippingData {
    email: string;
    firstName: string;
    lastName: string;
    company?: string;
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    phoneNumber: string;
  }
  
  export interface ProductData {
    name: string;
    size?: string;
    color?: string;
    quantity: number;
  }