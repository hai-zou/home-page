"use client"

import styles from "./page.module.css";
import Carousel, { SwiperAnimateType } from "./carousel";
import LoadingPage from "./loading-page";
import { useEffect, useState } from "react";
import Rotation from "./rotation";

type AnimateType = SwiperAnimateType | 'custom-rotate';

export default function Home() {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // 在这里修改动画效果
  const [animateType] = useState<AnimateType>('swiper-coverflow');

  const getDisplayList = () => {
    switch (animateType) {
      case 'swiper-coverflow':
      case 'swiper-creative':
      case 'swiper-tiled':
        return <Carousel animateType={animateType} />;
      case 'custom-rotate':
        return <Rotation />;
      default:
        return <></>;
    }
  };

  return (
    <>
      <LoadingPage isLoading={isPageLoading} />
      <main className={styles.main}>
        {getDisplayList()}
      </main>
    </>
  );
}
