import React from "react";
import {
  genderSelected,
  priceSelected,
  sizeSelected,
} from "src/const/filter-list";
import RadioSelectForm from "src/components/form/radio-select";
function FilterSidebar() {
  return (
    <div>
      <div>
        <span className="text-2xl block font-semibold">Bộ lọc sản phẩm</span>
        <span className="italic mt-3 block">
          Giúp bạn tìm kiếm sản phẩm theo đúng yêu cầu của mình
        </span>
      </div>
      <hr className="my-5" />
      <div>
        <RadioSelectForm title="price" objSelect={priceSelected} />
      </div>
      <hr className="my-5" />

      <div>
        <RadioSelectForm
          title="size"
          objSelect={sizeSelected}
          displayValue="horizontal"
        />
      </div>
      <hr className="my-5" />

      <div>
        <RadioSelectForm title="giới tính" objSelect={genderSelected} />
      </div>
      <hr className="my-5" />
      {/* 
      <div>
        <MenuSelected />
      </div> */}
    </div>
  );
}

export default FilterSidebar;
