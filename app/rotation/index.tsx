import { useRef } from 'react';
import { carouselList } from '@/app/data';
import CardItem from '@/app/cards';
import styles from './index.module.css';
import useMouseMove from './mouse-move';

const Rotation = () => {

  const wrapRef = useRef<HTMLDivElement>(null);

  // 半径
  const radius = 60 * carouselList.length;

  const getCardStyle = (index: number) => {
    // 旋转角度
    const rotateDeg = index * (360 / carouselList.length);
    // 动画时间
    const animateTime = index * 0.1;
    return {
      transform: `rotateY(${rotateDeg}deg) translateZ(${radius}px)`,
      transition: `transform 1s ${animateTime}s`,
    };
  };

  useMouseMove((angle) => {
    if (!wrapRef.current) return;
    wrapRef.current.style.transform = `rotateY(${angle}deg)`;
  });

  return <>
    <div id={styles.perspective}>
      <div className={styles['center-axis']} style={{ transform: `translateZ(${-radius}px)` }}>
        <div className={styles.wrap} ref={wrapRef}>
          {carouselList.map((item, index) => (
            <div
              key={item.id}
              className={styles['card']}
              style={getCardStyle(index)}
            >
              <CardItem cardItem={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
};

export default Rotation;