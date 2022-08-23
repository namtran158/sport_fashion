import React from "react";
import { Carousel } from "react-responsive-carousel";
import WrapperLayout from "../../components/layout/wrapper-layout";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Slide1 from "src/assets/images/slider_1.jpg";
import Slide2 from "src/assets/images/slider_2.jpg";
import Slide3 from "src/assets/images/slider_3.jpg";
import Slide4 from "src/assets/images/slider_4.jpg";
import Slide5 from "src/assets/images/slider_5.jpg";

import Strategy1 from "src/assets/images/privacy_1.png";
import Strategy2 from "src/assets/images/privacy_2.png";
import Strategy3 from "src/assets/images/privacy_3.png";
import Strategy4 from "src/assets/images/privacy_4.png";

import Banner1 from "src/assets/images/large_banner_1.jpg";

import HotLine from "src/components/sidebar/hot-line";
import BestSeller from "./components/best-seller";
import BestFavorite from "./components/best-favorite";
import AboutUs from "./components/about-us";

function LandingPage() {
  return (
    <div className=" w-11/12 md:w-3/4 py-5 mx-auto">
      {/* slide bar */}
      <div className="">
        <Carousel infiniteLoop={true} autoPlay={true}>
          <div>
            <img src={Slide1} alt="slide_1" />
          </div>
          <div>
            <img src={Slide2} alt="slide_2" />
          </div>
          <div>
            <img src={Slide3} alt="slide_3" />
          </div>
          <div>
            <img src={Slide4} alt="slide_3" />
          </div>
          <div>
            <img src={Slide5} alt="slide_3" />
          </div>
        </Carousel>
      </div>

      {/* stretagy */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 border p-4 rounded-md">
        <div className="flex items-center">
          <div>
            <img className="" src={Strategy1} alt="strategy_1" />
          </div>
          <span className="ml-3 text-gray-500 text-xs">
            Chính hãng 100%: giày nhập từ Adidas, Nike US, UK, JP
          </span>
        </div>

        <div className="flex items-center">
          <div>
            <img src={Strategy2} alt="strategy_2" />
          </div>
          <span className="pl-2 text-gray-500 text-xs">
            Đổi trả nhanh chóng: hỗ trợ đổi hàng miễn phí 7 ngày
          </span>
        </div>

        <div className="flex items-center">
          <div>
            <img src={Strategy3} alt="strategy_3" />
          </div>
          <span className="pl-2 text-gray-500 text-xs">
            Chương trình sale khủng:giá sale rẻ nhất thị trường
          </span>
        </div>

        <div className="flex items-center">
          <div>
            <img src={Strategy4} alt="strategy_4" />
          </div>
          <span className="pl-2 text-gray-500 text-xs">
            Đặt hàng online: tư vấn chuyên nghiệp, chuẩn size
          </span>
        </div>
      </div>

      <div className="md:flex w-full gap-8 mt-5">
        <div className=" md:w-3/12">
          <HotLine />
        </div>
        <div className="md:w-9/12">
          <BestSeller />
          <div className="mt-5 overflow-hidden">
            <img
              className="w-full duration-200 hover:scale-125 box-border"
              src={Banner1}
              alt="banner"
            />
          </div>
          <div className="mt-5">
            <BestFavorite />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <AboutUs />
      </div>
    </div>
  );
}

function WrapperLandingPage() {
  return (
    <WrapperLayout>
      <LandingPage />
    </WrapperLayout>
  );
}

export default WrapperLandingPage;
