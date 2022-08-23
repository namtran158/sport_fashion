import React from "react";

import Hotline1 from "src/assets/images/hot_line_1.png";
import Hotline2 from "src/assets/images/hotline_2.png";

function HotLine() {
  return (
    <div className="border">
      <div className="bg-gray-500 text-white p-4">
        <span>Hỗ trợ trực tuyến</span>
      </div>
      <div>
        <div className="flex items-center p-3">
          <div>
            <img src={Hotline1} alt="hot_line 1" />
          </div>
          <span className="pl-2 capitalize">hotline 1 : 0961812900</span>
        </div>

        <div className="flex items-center p-3">
          <div>
            <img src={Hotline1} alt="hot_line 1" />
          </div>
          <span className="pl-2 capitalize">hotline 1 : 0961812900</span>
        </div>

        <div className="flex items-center p-3">
          <div>
            <img src={Hotline2} alt="hot_line 2" />
          </div>
          <span className="pl-2 capitalize">hotline 2 : 0961812900</span>
        </div>
      </div>
    </div>
  );
}

export default HotLine;
