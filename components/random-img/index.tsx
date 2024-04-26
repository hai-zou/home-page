import { useEffect, useState } from 'react';
import styles from './index.module.css';
import PingLoad from '@/components/loading/ping-load';
import Image from 'next/image';

interface ImgData {
  imgUrl: string;
  width: number;
  height: number;
}

const RandomImg = (props: { loadComplete: () => void }) => {
  const [imgData, setImgData] = useState<ImgData>({
    imgUrl: '',
    width: 0,
    height: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  const getRandomImg = () => {
    setIsLoading(true);
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(true), 1000);
    }).then(() => {
      return fetch('https://imgapi.cn/api.php?fl=fengjing&gs=json', { mode: 'cors' });
    })
    .then(response => response.json())
    .then(data => {
      setImgData(data);
    })
    .catch(console.error)
    .finally(() => {
      setIsLoading(false);
      props.loadComplete();
    });
  };

  useEffect(() => getRandomImg(), []);

  return <div className={styles.container}>
    {!isLoading ? <div className={styles.wrapper}>
      <Image
        src={imgData.imgUrl}
        width={imgData.width}
        height={imgData.height}
        layout='responsive'
        alt='avatar'
        className={styles.image}
      />
    </div>: <PingLoad />}
  </div>
}

export default RandomImg;