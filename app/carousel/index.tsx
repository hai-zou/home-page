import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import styles from './index.module.css';
import ProjectCard from "./project-card";
import UserCard from "./user-card";
import { carouselList } from "./data";

const Carousel = () => {
  return (
    <Swiper
      modules={[EffectCoverflow, Pagination]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      className={styles['my-swiper']}
      initialSlide={Math.ceil(carouselList.length / 2) - 1}
    >
      {carouselList.map(item => (
        <SwiperSlide key={item.name} className={styles['swiper-slide']}>
          {
            item.type === 'project' ? <ProjectCard projectData={item} /> :
            item.type === 'user' ? <UserCard userData={item} /> :
            item.type === 'custom' ? item.children :
            <></>
          }
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
