"use client"

import styles from "./page.module.css";
import Carousel from "./carousel";
import LoadingPage from "./loading-page";
import { useEffect, useState } from "react";
import Script from "next/script";

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

  return (
    <>
      <LoadingPage isLoading={isPageLoading} />
      <main className={styles.main}>
        <Carousel />
      </main>
      {process.env.NODE_ENV === 'production' ? (
        <Script
          defer
          src="https://analytics.luckyzh.cn/script.js"
          data-website-id="2f9b3ca5-27e8-47e4-a618-1a225b7d99fd"
        />
      ) : null}
    </>
  );
}
