"use client"

import styles from "./page.module.css";
import Carousel from "./carousel";
import LoadingPage from "./loading-page";
import { useEffect, useState } from "react";

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
    </>
  );
}
