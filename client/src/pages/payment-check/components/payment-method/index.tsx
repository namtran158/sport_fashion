import { Collapse } from "react-collapse";
import { PaymentMothod } from "src/const/common/payment-method";
export interface PaymentMethodProps {
  paymentMothod: string;
  onChangePaymentMethod: (value: string) => void;
}

export default function PaymentMethod({
  paymentMothod,
  onChangePaymentMethod,
}: PaymentMethodProps) {
  return (
    <div className="w-full mt-5 border">
      <div className="border p-5">
        <div className="flex items-center justify-between">
          <span className="text-sm ">Chuyển khoản qua ngân hàng</span>
          <button
            className={`w-5 h-5 border rounded-full  ${
              paymentMothod === PaymentMothod[1] && "bg-blue-400"
            }`}
            onClick={() => onChangePaymentMethod(PaymentMothod[1])}
          ></button>
        </div>
        <Collapse isOpened={paymentMothod === PaymentMothod[1]}>
          <span className="block text-sm mt-3 text-gray-600">
            Vui lòng ghi lại MÃ ĐƠN HÀNG và SỐ ĐIỆN THOẠI của bạn vào mục Nội
            dung thanh toán. Đơn hàng sẽ đươc giao sau khi tiền đã được chuyển.
          </span>
          <span className="block text-sm mt-3 text-gray-600">
            Ví dụ: BNCJ9007 - 0123456789
          </span>
          <span className="block text-sm mt-3 text-gray-600">
            Thông tin tài khoản:
          </span>
          <span className="block text-sm mt-3 text-gray-600">
            VU MANH KIEN - stk : 0123456789 - Techcombank chi nhánh Hà Nội Nội
          </span>
        </Collapse>
      </div>
      <div className="border p-5">
        <div className="flex items-center justify-between">
          <span className="text-sm"> Thanh toán khi giao hàng (COD)</span>
          <button
            className={`w-5 h-5 border rounded-full ${
              paymentMothod === PaymentMothod[2] && "bg-blue-400"
            }`}
            onClick={() => onChangePaymentMethod(PaymentMothod[2])}
          ></button>
        </div>
        <Collapse isOpened={paymentMothod === PaymentMothod[2]}>
          <span className="block text-sm mt-3 text-gray-600">Bạn được KIỂM TRA hàng và thanh toán khi nhận được hàng</span>
        </Collapse>
      </div>
    </div>
  );
}
