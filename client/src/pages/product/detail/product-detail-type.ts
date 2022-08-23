export interface ProductData {
  name: string;
  price: string;
  gender: "male" | "female";
  size: number[];
  main_img: string;
  extra_img: string[];
  description: string;
  discount : number;
}
