import React from "react";
import { Link } from "react-router-dom";
import TableCart from "src/components/block/table-cart";
import WrapperLayout from "src/components/layout/wrapper-layout";

function CartPage() {
  return (
    <div className="w-8/12 mx-auto py-10">
      <TableCart />
      <div className="mt-5 text-right">
        <span>Tổng tiền : </span>
        <span className="text-red-600">12.000.000 VND</span>
      </div>
      <div className="mt-5 flex justify-between">
        <div>
          <button className="border-2 border-black px-5 py-2">
            Tiếp tục mua hàng
          </button>
          <button className="border-2 border-black px-5 py-2 ml-2">
            Xóa toàn bộ giỏ hàng
          </button>
        </div>
        <div>
          <Link to = "/checkout" className="btn-primary px-5 py-2 block">Thanh toán</Link>
        </div>
      </div>
      <div className="mt-5 flex justify-between items-center border p-5 bg-white">
        {/* user.loggined && this component ; (hide) */}
        <div className="w-2/4">
          <span>Đăng kí để nhận thông tin sản phẩm mới </span>
        </div>
        <div className="flex gap-4 w-2/4 justify-end">
          <Link
            className="underline underline-offset-2 text-red-600"
            to="/auth/login"
          >
            Login
          </Link>
          <span>/</span>
          <Link
            className="underline underline-offset-2 text-red-600"
            to="/auth/register"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
function WrapperCartPage() {
  return (
    <WrapperLayout>
      <CartPage />
    </WrapperLayout>
  );
}
export default WrapperCartPage;
