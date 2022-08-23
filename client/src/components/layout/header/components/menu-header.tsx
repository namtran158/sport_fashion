import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MENU_NAVBAR } from "src/const/menu-link";

function MenuHeader() {
  const [heading, setHeading] = useState<string>("");
  const [subHeading, setSubHeading] = useState<string>("");

  return (
    <>
      {MENU_NAVBAR.map((menu_navbar, index) => {
        return (
          <div key={index}>
            {/* normal screen */}
            <div className="group">
              <h1
                className="px-8 py-5 flex justify-between items-center capitalize cursor-pointer "
                onClick={() => {
                  heading !== menu_navbar.name
                    ? setHeading(menu_navbar.name)
                    : setHeading("");
                }}
              >
                {menu_navbar.name}

                <span className=" pl-2 text-xs ">
                  {menu_navbar.isSubMenu && (
                    <i
                      className={`fa-solid  ${
                        heading === menu_navbar.name
                          ? "fa-chevron-up text-green-600"
                          : "fa-chevron-down"
                      }`}
                    ></i>
                  )}
                </span>
              </h1>
              {menu_navbar.isSubMenu && (
                <div>
                  <div className="absolute z-30 top-14  hidden group-hover:md:block hover:md:block">
                    <div className="bg-white p-5 grid grid-cols-3 gap-10 border">
                      {menu_navbar.subMenu &&
                        menu_navbar.subMenu.map((menu_link, index) => {
                          return (
                            <div
                              key={index}
                              className={`${
                                !menu_link.isSubMenu && "col-span-3 "
                              }`}
                            >
                              {menu_link.path && (
                                <h1 className="text-sm font-semibold capitalize cursor-pointer hover:underline hover:underline-offset-4">
                                  <Link to={menu_link.path} className = "text-black">
                                    {menu_link.name}
                                  </Link>
                                </h1>
                              )}

                              <div>
                                {menu_link.isSubMenu &&
                                  menu_link.subMenu?.map((link, index) => {
                                    return (
                                      <div
                                        key={index}
                                        className="text-xs text-gray-600 my-2.5 capitalize"
                                      >
                                        {link.path && (
                                          <Link
                                            className="hover:text-red-500"
                                            to={link.path}
                                          >
                                            {link.name}
                                          </Link>
                                        )}
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* small screen */}
            <div
              className={`${
                heading === menu_navbar.name ? "md:hidden" : "hidden"
              }
          `}
            >
              {menu_navbar.isSubMenu &&
                menu_navbar.subMenu?.map((menu_link, index) => (
                  <div key={index}>
                    <div>
                      <h1
                        onClick={() => {
                          subHeading !== `${menu_navbar.name}/${menu_link.name}`
                            ? setSubHeading(
                                `${menu_navbar.name}/${menu_link.name}`
                              )
                            : setSubHeading("");
                        }}
                        className="py-4 pl-14  font-semibold md:pr-0 pr-8 flex justify-between items-center capitalize "
                      >
                        {menu_link.path && (
                          <Link to={menu_link.path}>{menu_link.name}</Link>
                        )}

                        {menu_link.isSubMenu && (
                          <span className="text-xs ">
                            <i
                              className={`fa-solid ${
                                subHeading ===
                                `${menu_navbar.name}/${menu_link.name}`
                                  ? "fa-chevron-up text-green-600"
                                  : "fa-chevron-down"
                              }`}
                            ></i>
                          </span>
                        )}
                      </h1>
                      <div
                        className={`${
                          subHeading === `${menu_navbar.name}/${menu_link.name}`
                            ? "md:hidden"
                            : "hidden"
                        }`}
                      >
                        {menu_link.isSubMenu &&
                          menu_link.subMenu?.map((link, index) => (
                            <li className="py-3 pl-20" key={index}>
                              {link.path && (
                                <Link
                                  className="capitalize text-gray-600"
                                  to={link.path}
                                >
                                  {link.name}
                                </Link>
                              )}
                            </li>
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default MenuHeader;
