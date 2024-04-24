import React, { useRef, useEffect } from 'react';
import Masonry from 'masonry-layout';
import './index.css';

const MasonryLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const masonryRef = useRef(null);

  useEffect(() => {
    // Initialize Masonry layout once the component mounts
    const masonry = new Masonry(masonryRef.current, {
      itemSelector: '.grid-item',
      gutter: 10,
      horizontalOrder: true,
    });

    // Destroy Masonry layout when the component unmounts
    return () => {
      masonry.destroy();
    };
  }, []);

  return (
    <div ref={masonryRef} className="grid">
      {children}
    </div>
  );
};

export default MasonryLayout;
