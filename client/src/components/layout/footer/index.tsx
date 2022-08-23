import React from "react";
import Logo from "../../../assets/images/Logo.png";
function FooterLayout() {
  return (
    <div>
      <div className="flex flex-col px-9 py-5">
        <div>
          <img className="h-8 w-auto" src={Logo} alt="logo" />
        </div>
        <div className="flex flex-col mt-8">
          <span className="font-semibold">Email : namtranjr158@gmail.com</span>
          <span className="text-slate-300 ">Copyright ⓒ 2022 Greeny. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}

export default FooterLayout;
