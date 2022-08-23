import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import TableCart from "src/components/block/table-cart";
import { Link } from "react-router-dom";
interface CardModalProps {
  [x: string]: any;
  open: boolean;
  onClose: () => void;
}

function CardModal(props: CardModalProps) {
  return (
    <Transition appear show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-auto transform overflow-hidden  bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Sản phẩm đã được thêm vào giỏ hàng
                </Dialog.Title>
                <hr className="my-3" />
                <div className="mt-2">
                  {/* pass data here as props */}
                  <TableCart />
                </div>

                <div className="mt-4 flex justify-between">
                  <div className="flex flex-col">
                    <Link className="underline underline-offset-2" to="/cart">
                      Tới giỏ hàng
                    </Link>
                    <button
                      className="underline underline-offset-2"
                      onClick={props.onClose}
                    >
                      Tiếp tục mua sắm
                    </button>
                  </div>
                  <div>
                    <span>Tổng thanh toán : </span>
                    <span className="text-red-600">12.000.000 VND</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Link to = "/checkout" className="btn-primary block">Thanh toán</Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default CardModal;
