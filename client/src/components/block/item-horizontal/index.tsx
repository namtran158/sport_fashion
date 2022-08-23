import React from "react";
import { IItem } from "../table-cart";
import { priceConvert } from "../../../utils/price-convert";

export const itemList: IItem[] = [
  {
    name: "Giày Sneaker Adidas Zx 2k Futureshell Cloud White/Acid Yellow G55509 - Hàng Chính Hãng",
    price: "1350000",
    size: 36,
    quantity: 1,
    main_img:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/413/756/products/ea0bb554-e3f6-4bb9-9221-3baa7f65f052.jpg?v=1638088648317",
  },
  {
    name: "Giày sneaker adidas nmd_r1 beijing fy1262 - hàng chính hãng",
    price: "1990000",
    size: 36,
    quantity: 2,
    main_img:
      "https://i8.amplience.net/s/scvl/119208_249158_SET/1?fmt=auto&$webPdpProduct$",
  },
];

function ItemHorizontal() {
  return (
    <>
      {itemList.map((item, index) => {
        return (
          <div className="flex justify-between mt-5">
            <div className=" relative w-20 h-20">
              <img
                className=" rounded-md"
                src={item.main_img}
                alt={item.name}
              />
              <div className="border bg-blue-400 w-5 h-5 rounded-full absolute -top-1 -right-1 text-white">
                <span className=" text-xs flex justify-center items-center">
                  {item.quantity}
                </span>
              </div>
            </div>
            <div className="w-2/4">
              <span className="block text-sm">{item.name}</span>
              <span className="text-sm">{item.size}</span>
            </div>
            <div>
              <span>{priceConvert(item.price)}</span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ItemHorizontal;
