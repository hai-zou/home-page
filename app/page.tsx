"use client"

import styles from "./page.module.css";
import OneWord from '@/components/one-word';
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

  return (
    <main className={styles.main}>
      <PackeryLayout isReset={isReset}>
        {createGridItem(15)}
        <div className='grid-item' style={{ width: '430px' }}>
          <OneWord loadComplete={() => oneWordLoaded()} />
        </div>
        {createGridItem(15)}
        <div className='grid-item' style={{ width: '320px' }}>
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
          </a>
        </div>
        {createGridItem(15)}
        <div className='grid-item' style={{ width: '210px' }}>
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
        </div>
        {createGridItem(15)}
        <div className='grid-item' style={{ width: '320px' }}>
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
        {createGridItem(15)}
      </PackeryLayout>
    </main>
  );
}
