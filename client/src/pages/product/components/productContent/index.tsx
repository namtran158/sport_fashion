import React, { useState } from "react";
import SelectForm from "src/components/form/select";
import { IOptionSelect } from "src/pages/payment-check";
import ProductList from "./components/product-list";

function ProductContent() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleChangeSelect = (value: IOptionSelect) => {
    setSelectedOption(value.value);
  };

  console.log(selectedOption);

  const options: IOptionSelect[] = [
    { label: "Từ A - Z", value: "lowest" },
    { label: "Từ Z - A", value: "highest" },
  ];
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <span>Tổng số sản phẩm: </span>
          <span>30</span>
        </div>
        <div className="w-2/4">
          <SelectForm
            id="sort-by"
            label="sắp xếp theo"
            name="sort-by"
            displayValue="horizontal"
            options={options}
            onChange={handleChangeSelect}
          />
        </div>
      </div>
      <div className="">
        <span className="text-xl font-semibold"> Giày Nike chính hãng</span>
        <ProductList />
      </div>
      <div className="mt-5">
        <span className="block text-sm italic text-gray-500">
          Greeny chuyên cung cấp Giày Sneaker, Giày Thể Thao Nike, giày nike
          jordan Chính Hãng 100% nhập từ US, UK, Japan, Korea.
        </span>
        <span className="block mt-2 text-sm italic text-gray-500">
          Đa dạng mẫu mã, cập nhật hàng mới liên tục, chương trình giảm giá rẻ
          nhất thị trường,SALE off lên tới 70%. Uy tín 3 năm chỉ bán hàng chính
          hãng, cam kết fake đền x10 Đặt hàng online, hỗ trợ đổi trả miễn phí,
          nhanh chóng, tư vấn chuyên nghiệp, chuẩn size.
        </span>
      </div>
    </div>
  );
}

export default ProductContent;
