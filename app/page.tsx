"use client"

import { forwardRef, useRef } from "react";
import RandomImg from "@/components/random-img";
import styles from "./page.module.css";
import OneWord from '@/components/one-word';
import UserInfo from "@/components/user-info";
import dynamic from "next/dynamic";
import TimeWeather from "@/components/card/time-weather";

const PackeryLayout = dynamic(() => import('@/components/packery'), { ssr: false });
const ForwardedRefPackery = forwardRef(function ForwardedRefPackery(props: { children: React.ReactNode; }, ref) {
  return <PackeryLayout forwardedRef={ref}>{props.children}</PackeryLayout>
});

export default function Home() {

  const packeryLayoutRef = useRef<any>(null);
  const resetPackeryLayout = () => {
    if (packeryLayoutRef.current === null) {
      return;
    }
    packeryLayoutRef.current.resetLayout();
  };

  const createGridItem = (num: number) => {
    const list = Array.from({ length: num }, (_, index) => index);
    return list.map((item) => (
      <div
        key={item}
        className='grid-item'
        style={{ width: '100px', height: '100px' }}
      ></div>
    ))
  };

  const createAllGrid = () => {
    const blockList = createGridItem(75);
    const customList = [
      <div key='OneWord' className='grid-item' style={{ width: '430px' }}>
        <OneWord loadComplete={() => resetPackeryLayout()} />
      </div>,
      <div key='UserInfo' className='grid-item' style={{ width: '320px', height: '320px' }}>
        <UserInfo />
      </div>,
      <div key='RandomImg' className='grid-item' style={{ width: '320px', height: '200px' }}>
        <RandomImg loadComplete={() => resetPackeryLayout()} />
      </div>,
      <div key='Blog' className='grid-item' style={{ width: '210px' }}>
        <a
          href="https://www.luckyzh.cn"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Blog <span>-&gt;</span>
          </h2>
          <p>Personal Blog | Front-end technology sharing</p>
        </a>
      </div>,
      <div key='TimeWeather' className='grid-item' style={{ width: '320px', height: '150px' }}>
        <TimeWeather />
      </div>,
    ];
    while (customList.length) {
      const item = customList.shift();
      if (!item) return;
      const randomIndex = Math.floor(Math.random() * (blockList.length + 1));
      blockList.splice(randomIndex, 0, item);
    }
    return blockList;
  };

  return (
    <main className={styles.main}>
      <ForwardedRefPackery ref={packeryLayoutRef}>
        {createAllGrid()}
      </ForwardedRefPackery>
    </main>
  );
}
