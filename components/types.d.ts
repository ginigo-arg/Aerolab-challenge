export interface Image {
  url: string;
  hdUrl: string;
}
export interface Products {
  img: Image;
  _id: string;
  name: string;
  cost: number;
  category: string;
}

export interface User {
  id: string;
  name: string;
  points: number;
  redeemHistory: [];
  createDate: Date;
}

export interface IContext {
  products: Products[];
  filteredProducts: Products[];
  user: User;
}

export interface AddCoin {
  message: string;
  "new Points": number;
}
