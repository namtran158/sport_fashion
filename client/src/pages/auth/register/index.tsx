import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import InputForm from "src/components/form/input-form";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Email không hợp lệ!")
    .required("Email là trường bắt buộc!"),
  username: Yup.string()
    .required("Username là trường bắt buộc!")
    .max(10, "Username không được nhiều hơn 10 kí tự")
    .min(4, "Username không được ít hơn 4 kí tự")
    .trim(),
  password: Yup.string().required("Password là trường bắt buộc!"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords không trùng khớp"
  ),
});

function RegisterPage() {
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  return (
    <div className="bg-zinc-50 h-screen px-5 md:px-0 ">
      <div className="flex items-center justify-center h-full -mt-8">
        <div className="border w-full max-w-lg p-5 rounded-xl bg-white">
          <div className="text-center">
            <span className="text-4xl capitalize text-green-500">
              greeny fashion
            </span>
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
                <div className="text-red-600 mt-2">{formik.errors.email}</div>
              )}
              <InputForm
                label="username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                type="username"
              />
              {formik.errors.username && formik.touched.username && (
                <div className="text-red-600 mt-2">
                  {formik.errors.username}
                </div>
              )}
              <InputForm
                label="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                type="password"
              />
              {formik.errors.password && formik.touched.password && (
                <div className="text-red-600 mt-2">
                  {formik.errors.password}
                </div>
              )}
              <InputForm
                label="xác nhận password"
                name="passwordConfirmation"
                value={formik.values.passwordConfirmation}
                onChange={formik.handleChange}
                type="password"
              />
              {formik.errors.passwordConfirmation &&
                formik.touched.passwordConfirmation && (
                  <div className="text-red-600 mt-2">
                    {formik.errors.passwordConfirmation}
                  </div>
                )}
              <button
                className="border mt-5 px-5 py-2 rounded-lg bg-blue-500 text-white"
                type="submit"
              >
                Submit
              </button>
            </form>
            <div className="mt-5">
              <span>Bạn đã có tài khoản? </span>
              <Link className="text-red-600 font-semibold" to="/auth/login">
                đăng nhập ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
