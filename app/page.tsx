"use client"

import styles from "./page.module.css";
import Projects from "./projects";
import Block from "./block";

export default function Home() {
  return (
    <main className={styles.main}>
      <Block />
      <Projects />
    </main>
  );
}
