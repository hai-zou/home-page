import React, { useRef, useEffect, useState, useImperativeHandle } from 'react';
import Packery from 'packery';
import Draggabilly from 'draggabilly';
import './index.css';

const PackeryLayout = ({
  children,
  forwardedRef
}: Readonly<{
  children: React.ReactNode;
  forwardedRef: any;
}>) => {
  const packeryRef = useRef(null);
  const [packeryInstance, setPackeryInstance] = useState<any>(null);

  useEffect(() => {
    const packery = new Packery(packeryRef.current, {
      itemSelector: '.grid-item',
      gutter: 10,
      columnWidth: 100,
    });

    packery.getItemElements().forEach((itemElem: HTMLElement) => {
      var draggie = new Draggabilly(itemElem);
      packery.bindDraggabillyEvents(draggie);
    });

    setPackeryInstance(packery);

    return () => {
      packery.destroy();
    };
  }, []);

  const resetLayout = () => {
    if (packeryInstance === null) {
      return;
    }
    packeryInstance.layout();
  }

  // 将内部方法暴露给父组件
  useImperativeHandle(forwardedRef, () => ({
    resetLayout,
  }));

  return (
    <div ref={packeryRef} className="grid">
      {children}
    </div>
  );
};

export default PackeryLayout;
