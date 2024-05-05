import { useEffect } from 'react';

const useMouseMove = (callback: (x: number) => void) => {
  useEffect(() => {
    // 鼠标拖动X轴偏移量
    let preX: number | null = null;
    // Y轴旋转角度
    let angle = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (preX === null) {
        return;
      } else {
        const offsetX = event.clientX - preX;
        angle += offsetX;
        callback(angle / 10);

        preX = event.clientX;
      }
    };

    const handleMouseDown = (event: MouseEvent) => {
      preX = event.clientX;
      document.addEventListener('mousemove', handleMouseMove);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
};

export default useMouseMove;
