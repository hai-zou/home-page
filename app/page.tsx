"use client"

import styles from "./page.module.css";
import OneWord from '@/components/one-word';
import UserInfo from "@/components/user-info";
import dynamic from "next/dynamic";
import { useState } from "react";

const PackeryLayout = dynamic(() => import('@/components/packery'), { ssr: false });

export default function Home() {

  const [isReset, setIsReset] = useState(false);
  const oneWordLoaded = () => {
    setIsReset(true);
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
        <OneWord loadComplete={() => oneWordLoaded()} />
      </div>,
      <div key='UserInfo' className='grid-item' style={{ width: '320px', height: '320px' }}>
        <UserInfo />
      </div>,
      <div key='Templates' className='grid-item' style={{ width: '210px' }}>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>
      </div>,
      <div key='Deploy' className='grid-item' style={{ width: '320px' }}>
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
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
      <PackeryLayout isReset={isReset}>
        {createAllGrid()}
      </PackeryLayout>
    </main>
  );
}
