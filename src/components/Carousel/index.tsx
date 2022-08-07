import { Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Slide } from "./Slide";

const continents = [
  {
    banner: "/southAmerica.jpg"
  },
  {
    banner: "/europe.png"
  }
]

export function Carousel() {
  return (
    <Swiper
      className="mySwiper"
      navigation={true}
      pagination={true}
      modules={[Navigation, Pagination]}
    >
      {
        continents.map(continent => (
          <SwiperSlide key={continent.banner} >

            <Slide data={continent} />

          </SwiperSlide>
        ))
      }

    </Swiper>
  )
}