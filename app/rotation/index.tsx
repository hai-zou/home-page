import { useRef } from 'react';
import { displayList } from '@/app/data';
import CardItem, { AllCard } from '@/app/cards';
import styles from './index.module.css';
import useMouseMove from './mouse-move';
import useTouchMove from './touch-move';

const isMobileDevice = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  return (typeof window.ontouchstart !== 'undefined');
}

type CardOrder = {
  [K in AllCard['type']]: number;
}

// 卡片排序
const cardOrder: CardOrder = { user: 1, project: 2, custom: 3 };
const rotateList = [...displayList];
rotateList.sort((a, b) => cardOrder[a.type] - cardOrder[b.type]);

const Rotation = () => {

  const wrapRef = useRef<HTMLDivElement>(null);

  // 半径
  const radius = 60 * rotateList.length;

  const getCardStyle = (index: number) => {
    // 旋转角度
    const rotateDeg = index * (360 / rotateList.length);
    // 动画时间
    const animateTime = index * 0.1;
    return {
      transform: `rotateY(${rotateDeg}deg) translateZ(${radius}px)`,
      transition: `transform 1s ${animateTime}s`,
    };
  };

  const useMove = isMobileDevice() ? useTouchMove : useMouseMove;
  useMove((angle) => {
    if (!wrapRef.current) return;
    wrapRef.current.style.transform = `rotateY(${angle}deg)`;
  });

  return <>
    <div id={styles.perspective}>
      <div className={styles['center-axis']} style={{ transform: `translateZ(${-radius}px)` }}>
        <div className={styles.wrap} ref={wrapRef}>
          {rotateList.map((item, index) => (
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