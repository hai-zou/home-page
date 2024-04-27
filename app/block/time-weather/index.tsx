import { useEffect, useState } from 'react';
import styles from './index.module.css';

const TimeWeather = () => {

  const getDate = () => {
    const dateIns = new Date();
    const year = dateIns.getFullYear();
    const month = String(dateIns.getMonth() + 1).padStart(2, '0');
    const day = String(dateIns.getDate()).padStart(2, '0');
    return `${year} 年 ${month} 月 ${day} 日`;
  };
  const getTime = () => {
    const dateIns = new Date();
    const hours = String(dateIns.getHours()).padStart(2, '0');
    const minutes = String(dateIns.getMinutes()).padStart(2, '0');
    const seconds = String(dateIns.getSeconds()).padStart(2, '0');
    return `${hours} : ${minutes} : ${seconds}`;
  };

  const [currentTime, setCurrentTime] = useState<string>(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className={styles.wrapper}>
    <div className={styles.date}>{getDate()}</div>
    <div className={styles.time}>{currentTime}</div>
    <div className={styles.weather}>深圳市</div>
  </div>
};

export default TimeWeather;