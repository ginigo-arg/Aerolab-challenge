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
