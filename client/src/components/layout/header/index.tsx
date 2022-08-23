import { useDispatch, useSelector } from "react-redux";
import { appState, openMobileHeader } from "src/features/app/app-slice";
import Logo from "../../../assets/images/Logo.png";
import MenuHeader from "./components/menu-header";
import NavbarMobile from "./components/navbar-mobile";
import Search from "./components/search";
import UserAuth from "./components/user-auth";
import { ShoppingCartIcon } from "@heroicons/react/solid";
function HeaderLayout() {
  const dispatch = useDispatch();
  const { mobileHeaderOpen } = useSelector(appState);

  return (
    <>
      <div className="block md:flex justify-between py-5 px-4 md:px-10">
        <div
          className={
            mobileHeaderOpen ? "hidden" : "flex items-center justify-between"
          }
        >
          <img className="md:cursor-pointer h-9" src={Logo} alt="Greeny Logo" />
          <i
            onClick={() => dispatch(openMobileHeader())}
            className={`fa-solid fa-bars cursor-pointer  text-xl  md:hidden ${
              mobileHeaderOpen ? "hidden" : "block"
            }`}
          ></i>
        </div>
        <div
          className={`w-full mt-4 md:w-2/4 md:mt-0  ${
            mobileHeaderOpen && "hidden"
          }`}
        >
          <Search />
        </div>
        <div className="hidden md:flex items-center ">
          <div className=" mr-5 flex items-center bg-zinc-50 relative ">
            <button className="border p-1 rounded-full active:bg-zinc-100">
              <ShoppingCartIcon className="w-5 h-5  text-gray-600" />
            </button>
            <div className="absolute w-3 h-3 right-0 -top-1 border bg-red-600 rounded-full">
              {/* <span className="text-red-600 text-sm ">1</span> */}
            </div>
          </div>
          <div>
            <UserAuth />
          </div>
        </div>
      </div>

      <div className="sticky top-0 bg-gray-800 z-50">
        <div className="flex items-center font-medium justify-around  px-9 ">
          <ul className="hidden md:flex text-white ">
            <MenuHeader />
          </ul>
        </div>
      </div>

      <div className="md:hidden font-semibold">
        <div
          style={{ zIndex: "40", height: "calc(100vh - 70px)" }}
          className={`w-full  overflow-y-auto top-0 absolute duration-200 ${
            mobileHeaderOpen ? "left-0" : "-left-full"
          }`}
        >
          <NavbarMobile dispatch={dispatch} open={mobileHeaderOpen} />
        </div>
      </div>
    </>
  );
}

export default HeaderLayout;
