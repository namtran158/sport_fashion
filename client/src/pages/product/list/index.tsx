import React from "react";
import WrapperLayout from "src/components/layout/wrapper-layout";
import ProductContent from "../components/productContent";
import FilterSidebar from "../components/side-bar-filter";

function ProductListPage() {
  return (
    <div className="py-5 w-11/12 md:w-10/12 flex gap-5 justify-between mx-auto">
      {/* sidebar filter */}
      <div className="md:w-3/12 ">
        <FilterSidebar />
      </div>
      {/* list product show */}
      <div className="md:w-8/12">
        <ProductContent />
      </div>
    </div>
  );
}

function WrapperProductList() {
  return (
    <WrapperLayout>
      <ProductListPage />
    </WrapperLayout>
  );
}

export default WrapperProductList;
