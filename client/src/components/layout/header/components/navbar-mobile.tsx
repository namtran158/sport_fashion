import React from "react";
import MenuHeader from "./menu-header";
import Avatar from "src/assets/images/avatar.png";
import { Link } from "react-router-dom";
import { closeMobileHeader } from "src/features/app/app-slice";
// import UserAuth from "./user-auth";
function NavbarMobile({ open, dispatch }: any) {
  return (
    <div className="h-full">
      <div>
        <i
          onClick={() => dispatch(closeMobileHeader())}
          className="fa-solid fa-xmark  w-full  text-2xl text-right px-8 py-3 cursor-pointer"
        ></i>
        <hr />
        <ul className="">
          <MenuHeader />
        </ul>

        <div
          className={`fixed  bottom-0 left-0 py-5 px-5  items-center justify-between w-full bg-gray-100 ${
            open ? "flex" : "hidden"
          }`}
        >
          <Link to={"/profile"} className=" flex items-center">
            <img
              className="w-8 h-8 rounded-full"
              src={Avatar}
              alt="Vu Manh Kien"
            />
            <span className="pl-2">Kien2606</span>
          </Link>
          <Link to="/auth/login" className="flex items-center">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <span className="pl-2">Sign out</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavbarMobile;


