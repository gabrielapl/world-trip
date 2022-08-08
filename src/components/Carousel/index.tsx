import { useEffect, useState } from "react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Slide } from "./Slide";
import { Continent } from "../../dtos/Continent";
import { api } from "../../services/api";

export function Carousel() {

  const [continents, setContinents] = useState<Continent[]>([]);

  useEffect(() => {
    async function getContinents() {
      const response = await api.get("/continents");

      setContinents(response.data);
    }

    getContinents();
  }, []);

  return (
    <Swiper
      className="mySwiper"
      navigation={true}
      pagination={true}
      modules={[Navigation, Pagination]}
    >
      {
        continents.map(continent => (
          <SwiperSlide key={continent.id} >

            <Slide data={continent} />

          </SwiperSlide>
        ))
      }

    </Swiper>
  )
}