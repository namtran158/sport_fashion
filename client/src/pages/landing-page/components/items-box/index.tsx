import React from "react";
import { Link } from "react-router-dom";
import CardItem from "src/components/block/item-card";
import { IItemData } from "../../mock-items";

export interface ItemsBoxProps {
  items: IItemData[];
  title: string;
  path: string;
}

function ItemsBox({ items, title, path }: ItemsBoxProps) {
  return (
    <div>
      <div className="mt-5 md:mt-0 p-3 border border-b-0 border-t-2 border-t-black">
        <span className="font-semibold text-lg capitalize">{title}</span>
      </div>
      <div className="grid grid-cols-2  md:grid-cols-3  xl:grid-cols-4  gap-2">
        {items &&
          items.map((item: any, index: any) => {
            return (
              <div key={index}>
                <CardItem item={item} />
              </div>
            );
          })}
      </div>
      <div className="mt-5 justify-end flex items-center">
        <Link className="text-blue-600 active:text-red-600" to={path}>
          See more
        </Link>
        <i className="fa-solid fa-arrow-right-long pl-2 text-blue-600 pt-1"></i>
      </div>
    </div>
  );
}

export default ItemsBox;
