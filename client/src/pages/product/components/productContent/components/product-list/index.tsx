import React from "react";
import CardItem from "src/components/block/item-card";
import Pagination from "src/components/layout/pagination";
import { dummyListData } from "./dummy-data";

function ProductList() {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-4 gap-5">
        {dummyListData.map((item, index) => {
          return (
            <div key={index}>
              <CardItem item={item} />
            </div>
          );
        })}
      </div>
      <div className="mt-5 flex justify-end">
        <Pagination
          labelNext=">"
          labelPrevious="<"
          pageItems={24}
          totalPage={100}
          currentPage={1}
        />
      </div>
      
    </div>
  );
}

export default ProductList;
