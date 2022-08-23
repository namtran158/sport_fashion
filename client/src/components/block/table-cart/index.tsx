import React from "react";
import { priceConvert } from "src/utils/price-convert";
import "./style.scss";
export interface IItem {
  main_img: string;
  name: string;
  price: string;
  size: number;
  quantity: number;
}
function TableCart() {
  const testItem: IItem[] = [
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

  return (
    <table className="cart-table">
      <thead>
        <tr>
          <th>Ảnh sản phẩm</th>
          <th>Tên sản phẩm</th>
          <th>Đơn giá</th>
          <th>Số lượng</th>
          <th>Thành tiền</th>
          <th>Xóa</th>
        </tr>
      </thead>
      <tbody className="">
        {testItem.map((item, index) => {
          return (
            <tr className="my-2" key={index}>
              <td className="w-1/6">
                <img
                  className="w-14 h-14 mx-auto"
                  src={item.main_img}
                  alt={item.name}
                />
              </td>
              <td className="w-2/6 text-left">
                <span className="text-sm block">{item.name}</span>
                <span>size : {item.size}</span>
              </td>
              <td className="">
                <span>{priceConvert(item.price)}</span>
              </td>
              <td className="">
                <div>
                  <button className="border px-4 py-1 mr-3 hover:bg-gray-800 hover:text-white">
                    -
                  </button>
                  <span className="border px-6 py-1 mr-3 ">
                    {item.quantity}
                  </span>
                  <button className="border px-3 py-1 hover:bg-gray-800 hover:text-white">
                    +
                  </button>
                </div>
              </td>
              <td className="">
                <span>{priceConvert(Number(item.price) * item.quantity)}</span>
              </td>
              <td className="">
                <div>
                  <button>Xóa</button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableCart;
