import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Avatar from "src/assets/images/avatar.png";
export default function UserAuth() {
  return (
    <Menu as="div" className="relative">
      <div className=" flex items-center">
        <Menu.Button className="flex items-center">
          <img
            className="h-8 w-8 rounded-full"
            src={Avatar}
            alt="Tran Hoai Nam"
          />
          <span className="pl-2">Leo</span>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          style={{ zIndex: "999" }}
          className="absolute mt-2 w-56 right-0 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="flex flex-col ">
            <Menu.Item>
              {({ active }: any) => (
                <Link
                  to="/profile"
                  className={` rounded-t-md px-4 py-4 ${
                    active && "bg-gray-300"
                  }`}
                >
                  Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }: any) => (
                <Link
                  to="/auth/login"
                  className={` rounded-b-md px-4 py-4 ${
                    active && "bg-gray-300"
                  }`}
                >
                  Sign out
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
