import React from "react";
import { itemList2 } from "../../mock-items";
import ItemsBox from "../items-box";

function BestFavorite() {
  return <ItemsBox items={itemList2} title="sản phẩm được quan tâm" path="/" />;
}

export default BestFavorite;
