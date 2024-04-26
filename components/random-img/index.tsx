import { useEffect, useState } from 'react';
import styles from './index.module.css';
import PingLoad from '@/components/loading/ping-load';
import Image from 'next/image';
import BASE_URL from '@/api-base-url';

interface ImgData {
  imgurl: string;
  width: number;
  height: number;
}

const RandomImg = (props: { loadComplete: () => void }) => {
  const [imgData, setImgData] = useState<ImgData>({
    imgurl: '',
    width: 0,
    height: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  const getRandomImg = () => {
    setIsLoading(true);
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(true), 1000);
    }).then(() => {
      return fetch(`${BASE_URL.IMG_API}/api.php?fl=fengjing&gs=json`);
    })
    .then(response => response.json())
    .then(data => {
      setImgData(data);
    })
    .catch(console.error)
    .finally(() => {
      setIsLoading(false);
    });
  };

  useEffect(() => getRandomImg(), []);

  const handleImageLoad = () => {
    props.loadComplete();
  };

  return <div className={styles.container}>
    {!isLoading ? (
      <>
        {imgData.imgurl ? <Image
          src={imgData.imgurl}
          width={imgData.width}
          height={imgData.height}
          alt='scenery'
          priority={true}
          className={styles.image}
          onLoad={handleImageLoad}
        /> : <>No Data</>}
      </>
    ): <PingLoad />}
  </div>
}

export default RandomImg;