import React, { useRef } from "react";
import { CollectionItems, Collection, Manifest } from "@iiif/presentation-3";
import { FetchCredentials, SwiperBreakpoints } from "../../../types/types";
import Item from "./Item";
import { ItemsStyled } from "./Items.styled";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface ItemsProps {
  breakpoints?: SwiperBreakpoints;
  credentials: FetchCredentials;
  instance: number;
  items: CollectionItems[];
}

const defaultBreakpoints = {
  640: {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 40,
  },
  1366: {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 50,
  },
  1920: {
    slidesPerView: 6,
    slidesPerGroup: 6,
    spaceBetween: 60,
  },
};

const Items: React.FC<ItemsProps> = ({
  breakpoints = defaultBreakpoints,
  credentials,
  instance,
  items,
}) => {
  const itemsRef = useRef<HTMLDivElement>(null);

  return (
    <ItemsStyled ref={itemsRef}>
      <Swiper
        a11y={{
          prevSlideMessage: "previous item",
          nextSlideMessage: "next item",
        }}
        spaceBetween={31}
        modules={[Navigation, A11y]}
        navigation={{
          nextEl: `.bloom-next-${instance}`,
          prevEl: `.bloom-previous-${instance}`,
        }}
        slidesPerView={2}
        slidesPerGroup={2}
        breakpoints={breakpoints}
      >
        {items.map((item, index) => (
          <SwiperSlide key={`${item.id}-${index}`}>
            <Item
              credentials={credentials}
              index={index}
              item={item as Collection | Manifest}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </ItemsStyled>
  );
};

export default Items;
