import React from "react";
import "./style.scss";

import { IItemData } from "src/pages/landing-page/mock-items";
import { priceConvert } from "src/utils/price-convert";

interface CardItemProps {
  item: IItemData;
}

function CardItem({ item }: CardItemProps) {
  return (
    <div className="border rounded-sm p-4 wrapper-item-card">
      <div>
        <div className="relative">
          <img
            className="h-36 w-full object-cover"
            src={item.img_url}
            alt={item.name}
          />
          <span className="text-sm bg-red-600 text-white absolute top-0 right-0 px-2 py-1">
            {item.discount}%
          </span>
        </div>
        <div className="pt-2">
          <span className=" item-name text-sm">{item.name}</span>
        </div>
        <div className="pt-2 text-sm flex justify-between">
          <span className="text-red-600">
            {priceConvert(
              Number(item.price) - (Number(item.price) * item.discount) / 100
            )}
          </span>

          <span className="line-through text-gray-500">
            {priceConvert(item.price)}
          </span>
        </div>
      </div>
    </div> 
  );
}

export default CardItem;
