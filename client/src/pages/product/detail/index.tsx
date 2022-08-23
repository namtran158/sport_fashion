import { useState } from "react";
import WrapperLayout from "src/components/layout/wrapper-layout";
import { priceConvert } from "src/utils/price-convert";
import CardModal from "../components/card-modal";
import ItemsCarousel from "./components/items-carousel.tsx";
import { productItem } from "./dummy-data";

import "./style.scss";
function ProductDetail() {
  const [size, setSize] = useState(productItem.size[0]);
  const [quantity, setQuantity] = useState(1);
  const [displayImg, setDisplayImg] = useState(productItem.main_img);
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <div className=" w-10/12 py-5 gap-5 flex mx-auto">
      <div className="md:w-8/12">
        <div>
          <img className="w-full " src={displayImg} alt="main_shoe" />
        </div>
        <div className="flex justify-start">
          {productItem.extra_img.map((img, index) => {
            return (
              <button
                key={index}
                className="w-20 h-20 border p-1 mt-2 bg-white mr-2"
                onClick={() => {
                  setDisplayImg(img);
                }}
              >
                <img src={img} alt="extra_shoe" />
              </button>
            );
          })}
        </div>
        <div className="mt-2">
          <span className="font-semibold">Phản hồi từ khách hàng</span>
          {/* no feedback */}
          <div className="mt-1">
            <span className="text-sm text-gray-600 block">
              Hiện sản phẩm chưa có đánh giá nào ...
            </span>
            <button className="text-sm bg-blue-500 p-3 text-white rounded-sm mt-1">
              Gửi đánh giá của bạn
            </button>
          </div>
        </div>
        <div className="mt-5 border border-t-2 border-t-black">
          <span className="pl-2 font-semibold">Sản phẩm bán chạy nhất</span>
          <div className="mt-2">
            {/* pass data as prop in this component */}
            <ItemsCarousel />
          </div>
        </div>
        <div className="mt-5 border border-t-2 border-t-black">
          <span className="pl-2 font-semibold">Sản phẩm liên quan</span>
          <div className="mt-2">
            {/* pass data as prop in this component */}
            <ItemsCarousel />
          </div>
        </div>
      </div>

      <div className="md:w-4/12 px-5 sticky xl:top-16 2xl:top-28 h-full">
        <span className="text-lg font-semibold">{productItem.name}</span>
        <div className="mt-2">
          <span className="text-lg text-red-600 font-semibold">
            {priceConvert(
              Number(productItem.price) -
                (Number(productItem.price) * productItem.discount) / 100
            )}
          </span>
          <span className="text-gray-600 text-sm line-through pl-3">
            {priceConvert(productItem.price)}
          </span>
        </div>
        <div className="mt-2">
          <span>Mã sản phẩm : </span>
          <span>USSXA1240-333</span>
        </div>
        <div className="mt-2">
          <span>Thương hiệu :</span>
          <span className="font-semibold"> Nike</span>
        </div>
        <div className="mt-2">
          <span className="font-semibold block">Mô tả : </span>
          <span className="text-sm text-gray-500">Chưa có thông tin mô tả</span>
        </div>
        <hr className="mt-3" />
        <div className="mt-2 ">
          <span className="text-md text-gray-600">Kích thước</span>
          <div className="flex flex-wrap">
            {productItem.size.map((value, index) => {
              return (
                <button
                  className={`border px-6 mr-3 mt-2 py-1 ${
                    size === value && "bg-red-600 text-white"
                  }`}
                  key={index}
                  onClick={() => {
                    setSize(value);
                  }}
                >
                  {value}
                </button>
              );
            })}
          </div>
        </div>
        <div className=" flex items-center mt-2">
          <span className="text-gray-600 mr-8">Số lượng </span>
          <div className="mt-2">
            <button
              className={`border px-4 py-1 mr-3 hover:bg-gray-800 hover:text-white ${
                quantity < 2 && "cursor-not-allowed"
              }`}
              onClick={() => setQuantity((preState) => preState - 1)}
              disabled={quantity < 2}
            >
              -
            </button>
            <span className="border px-6 py-1 mr-3 ">{quantity}</span>
            <button
              className="border px-3 py-1 hover:bg-gray-800 hover:text-white"
              onClick={() => setQuantity((preState) => preState + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="mt-3">
          <button
            className="border bg-gray-800 px-6 py-2 text-white"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <i className="fa-solid fa-cart-shopping text-xs"></i>
            <span className="text-sm ml-2">Thêm vào giỏ hàng</span>
          </button>
        </div>
      </div>
      <CardModal open={openModal} onClose={closeModal} />
    </div>
  );
}

export default function WrapperProductDetail() {
  return (
    <WrapperLayout>
      <ProductDetail />
    </WrapperLayout>
  );
}
