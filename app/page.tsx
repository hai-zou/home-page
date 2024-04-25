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

  return (
    <main className={styles.main}>
      <PackeryLayout isReset={isReset}>
        <div className='grid-item' style={{ width: '410px' }}>
          <OneWord loadComplete={() => oneWordLoaded()} />
        </div>
        <div className='grid-item' style={{ width: '200px' }}>
          <a
            href="https://blog.luckyzh.cn"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Blog <span>-&gt;</span>
            </h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </div>
        <div className='grid-item'>
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
        <div className='grid-item' style={{ width: '200px' }}>
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
        <div className='grid-item'>
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
      </PackeryLayout>
    </main>
  );
}
