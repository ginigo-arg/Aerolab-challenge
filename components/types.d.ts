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
  _id: string;
  name: string;
  points: number;
  redeemHistory: [];
  createDate: Date;
}

export interface State {
  products: Products[];
  filteredProducts: Products[];
  user: User[];
}

export interface Amount {
  amount: number[1000 | 5000 | 7500];
}
export interface Reedem {
  message: string;
}

export interface AddCoin {
  message: string;
  "new Points": number;
}
