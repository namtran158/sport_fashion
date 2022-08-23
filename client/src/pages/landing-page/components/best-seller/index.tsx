import React from "react";
import { itemList } from "../../mock-items";
import ItemsBox from "../items-box";

function BestSeller() {
  return <ItemsBox items={itemList} title="sản phẩm nổi bật" path="/" />;
}

export default BestSeller;
