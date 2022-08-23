import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import InputForm from "src/components/form/input-form";
import PaymentMethod from "./components/payment-method";
import ItemHorizontal from "src/components/block/item-horizontal";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Email không hợp lệ!")
    .required("Email là trường bắt buộc!"),
  fullName: Yup.string().required("Họ tên là trường bắt buộc!"),
  phoneNumber: Yup.string().required("Số điện thoại là trường bắt buộc!"),
  address: Yup.string().required("Địa chỉ là trường bắt buộc!"),
});

export interface IOptionSelect {
  value: string;
  label: string;
}

function CheckoutPayment() {
  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      phoneNumber: "",
      address: "",
      province: "",
      district: "",
      wards: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  const [paymentMothod, setPaymentMethod] = useState<string>("COD");

  const handleChangePaymentMethod = (value: string) => {
    setPaymentMethod(value);
  };

  console.log("paymentMothod", paymentMothod);

  return (
    <div className=" mt-5 w-11/12 md:w-10/12 mx-auto">
      <Link to="/cart" className="underline underline-offset-2 font-semibold">
        Quay lại giỏ hàng
      </Link>

      <div className="flex mt-5 gap-10">
        <div className="w-8/12">
          <span className="font-semibold text-2xl">Grenny Fashion</span>
          <div className="flex gap-5">
            {/* left side */}
            <div className="w-2/4">
              <div className="mt-2 flex justify-between">
                <span>Thông tin mua hàng</span>
                <Link
                  className="underline underline-offset-2 text-red-600"
                  to="/auth/login"
                >
                  Đăng nhập
                </Link>
              </div>
              <div>
                <form onSubmit={formik.handleSubmit}>
                  <InputForm
                    label="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    type="email"
                  />
                  {formik.errors.email && formik.touched.email && (
                    <div className="text-red-600 mt-2">
                      {formik.errors.email}
                    </div>
                  )}
                  <InputForm
                    label="Họ và tên"
                    name="fullName"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    type="fullName"
                  />
                  {formik.errors.fullName && formik.touched.fullName && (
                    <div className="text-red-600 mt-2">
                      {formik.errors.fullName}
                    </div>
                  )}
                  <InputForm
                    label="Số điện thoại"
                    name="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    type="phoneNumber"
                  />
                  {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                    <div className="text-red-600 mt-2">
                      {formik.errors.phoneNumber}
                    </div>
                  )}
                  <InputForm
                    label="Địa chỉ"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    type="address"
                  />
                  {formik.errors.address && formik.touched.address && (
                    <div className="text-red-600 mt-2">
                      {formik.errors.address}
                    </div>
                  )}
                </form>
              </div>
            </div>
            {/* right side */}
            <div className="mt-2 w-2/4">
              <div>
                <span className="font-semibold text-lg">Vận chuyển</span>
                <div className="border p-5 bg-blue-400 mt-4">
                  <span className="text-sm text-gray-600">
                    Vui lòng nhập thông tin vận chuyển
                  </span>
                </div>
              </div>
              <div className="mt-11 font-semibold text-lg">
                <span>Hình thức thanh toán</span>
                <div>
                  <PaymentMethod
                    paymentMothod={paymentMothod}
                    onChangePaymentMethod={handleChangePaymentMethod}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-4/12 ">
          <span className="font-semibold text-2xl">Đơn hàng sản phẩm </span>
          <hr className="mt-5" />
          <div className="">
            <ItemHorizontal />
          </div>
          <hr className="mt-5" />
          <div className="mt-5">
            <div className="flex justify-between">
              <span>Chi phí đơn hàng</span>
              <span>1.200.000</span>
            </div>
            <div className="mt-3 flex justify-between">
              <span>Phí vận chuyển</span>
              <span>20.000</span>
            </div>
          </div>
          <hr className="mt-5" />
          <div className="mt-5">
            <div className="flex justify-between">
              <span>Tổng cộng</span>
              <span>1.220.000 </span>
            </div>
          </div>
          <div className="text-right">
            <button className="mt-5  btn-primary py-2">Đặt hàng</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPayment;
