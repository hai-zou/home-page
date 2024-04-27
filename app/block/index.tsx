import { useRef } from "react";
import RandomImg from "./random-img";
import OneWord from './one-word';
import UserInfo from "./user-info";
import TimeWeather from "./time-weather";
import ForwardedRefPackery from "@/components/packery/packery-ref";

const Block = () => {
  const packeryLayoutRef = useRef<any>(null);
  const resetPackeryLayout = () => {
    if (packeryLayoutRef.current === null) {
      return;
    }
    packeryLayoutRef.current.resetLayout();
  };

  const createGridItem = (num: number) => {
    const list = Array.from({ length: num }, (_, index) => index);
    return list.map((item) => (
      <div
        key={item}
        className='grid-item'
        style={{ width: '100px', height: '100px' }}
      ></div>
    ))
  };

  const createAllGrid = () => {
    const blockList = createGridItem(75);
    const customList = [
      <div key='OneWord' className='grid-item' style={{ width: '430px' }}>
        <OneWord loadComplete={() => resetPackeryLayout()} />
      </div>,
      <div key='UserInfo' className='grid-item' style={{ width: '320px', height: '320px' }}>
        <UserInfo />
      </div>,
      <div key='RandomImg' className='grid-item' style={{ width: '320px', height: '200px' }}>
        <RandomImg loadComplete={() => resetPackeryLayout()} />
      </div>,
      <div key='TimeWeather' className='grid-item' style={{ width: '320px', height: '150px' }}>
        <TimeWeather />
      </div>,
    ];
    while (customList.length) {
      const item = customList.shift();
      if (!item) return;
      const randomIndex = Math.floor(Math.random() * (blockList.length + 1));
      blockList.splice(randomIndex, 0, item);
    }
    return blockList;
  };
  return <>
    <ForwardedRefPackery ref={packeryLayoutRef}>
      {createAllGrid()}
    </ForwardedRefPackery>
  </>
};

export default Block;