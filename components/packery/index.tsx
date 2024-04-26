import React, { useRef, useEffect, useState } from 'react';
import Packery from 'packery';
import Draggabilly from 'draggabilly';
import './index.css';

const PackeryLayout = ({
  children,
  resetNum,
}: Readonly<{
  children: React.ReactNode;
  resetNum: number;
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

  useEffect(() => {
    if (packeryInstance === null) {
      return;
    }
    packeryInstance.layout();
  }, [resetNum, packeryInstance]);

  return (
    <div ref={packeryRef} className="grid">
      {children}
    </div>
  );
};

export default PackeryLayout;
