"use client"

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import OneWord from '@/components/one-word';
import MasonryLayout from '@/components/masonry-layout';

interface OneWordData {
  hitokoto: string;
  from: string;
}

export default function Home() {

  const [oneWordData, setOneWordData] = useState<OneWordData>({
    hitokoto: '',
    from: '',
  });
  const [isLoadComplete, setIsLoadComplete] = useState(false);

  const getOneWord = () => {
    fetch('https://v1.hitokoto.cn', { mode: 'cors' })
      .then(response => response.json())
      .then(data => {
        setOneWordData(data);
      })
      .catch(console.error)
      .finally(() => {
        setIsLoadComplete(true);
      });
  };

  useEffect(() => {
    getOneWord();
  }, []);

  return (
    <main className={styles.main}>
      {isLoadComplete ? <MasonryLayout>
        <div className='grid-item'>
          <OneWord
            text={oneWordData.hitokoto}
            from={oneWordData.from}
          />
        </div>
        <div className='grid-item'>
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
        <div className='grid-item'>
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
      </MasonryLayout> : null}
    </main>
  );
}
