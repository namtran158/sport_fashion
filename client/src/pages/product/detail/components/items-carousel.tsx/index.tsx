import React from "react";
import { itemList } from "src/pages/landing-page/mock-items";
import Carousel from "react-multi-carousel";
import CardItem from "src/components/block/item-card";
function ItemsCarousel() {
  console.log("items list ", itemList);

  let responsive: any = {
    desktop: {
      breakpoint: { max: 3000, min: 1365 },
      items: 4,
    },
    tabnet: {
      breakpoint: { max: 1365, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 1 },
      items: 2,
    },
  };

  return (
    <div className=""> 
      <Carousel responsive={responsive} arrows = {false} autoPlay infinite>
        {itemList.map((item, index) => {
          return (
            <div key={index} className="px-2 pb-2 cursor-pointer">
              <CardItem item={item} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default ItemsCarousel;
