import { useEffect, useRef } from 'react';
import styles from './index.module.css';

const ClockCard = () => {

  const hr = useRef<HTMLDivElement | null>(null);
  const mn = useRef<HTMLDivElement | null>(null);
  const sc = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const deg = 6;
    const interval = setInterval(() => {
      if (hr.current == null) return;
      if (mn.current == null) return;
      if (sc.current == null) return;
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;
      hr.current.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
      mn.current.style.transform = `rotateZ(${mm}deg)`;
      sc.current.style.transform = `rotateZ(${ss}deg)`;
    });

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`${styles.wrapper} ${styles.light}`}>
      <div className={styles.clock}>
        <div className={styles.hour}>
          <div className={styles.hr} ref={hr}></div>
        </div>
        <div className={styles.min}>
          <div className={styles.mn} ref={mn}></div>
        </div>
        <div className={styles.sec}>
          <div className={styles.sc} ref={sc}></div>
        </div>
      </div>
    </div>
  )
};

export default ClockCard;