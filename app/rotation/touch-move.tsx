import { useEffect } from 'react';

// 移动端设备
const useTouchMove = (callback: (x: number) => void) => {
  useEffect(() => {
    let preX: number | null = null;
    let angle = 0;

    const handleTouchMove = (event: TouchEvent) => {
      if (preX === null) {
        return;
      } else {
        const nowX = event.touches[0].clientX;
        const offsetX = nowX - preX;
        angle += offsetX;
        callback(angle / 10);

        preX = nowX;
      }
    };

    const handleTouchDown = (event: TouchEvent) => {
      preX = event.touches[0].clientX;
      document.addEventListener('touchmove', handleTouchMove);
    };

    const handleTouchUp = () => {
      document.removeEventListener('touchmove', handleTouchMove);
    };

    document.addEventListener('touchstart', handleTouchDown);
    document.addEventListener('touchend', handleTouchUp);
    return () => {
      document.removeEventListener('touchstart', handleTouchDown);
      document.removeEventListener('touchend', handleTouchUp);
    };
  }, []);
};

export default useTouchMove;
