"use client"

import Block from "@/components/block";
import styles from "./page.module.css";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className={styles.main}>
      <Block />
      <Projects />
    </main>
  );
}
