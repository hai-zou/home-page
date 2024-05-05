import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './index.module.css';
import BASE_URL from '@/api-base-url';
import BouncyLoad from '@/components/loading/bouncy-load';
import { RefreshCwIcon } from 'lucide-react';

interface ImgData {
  imgurl: string;
  width: number;
  height: number;
}
interface OneWordData {
  hitokoto: string;
  from: string;
}

const MoodCard = () => {
  const [imgData, setImgData] = useState<ImgData>({
    imgurl: '',
    width: 0,
    height: 0,
  });
  const [oneWordData, setOneWordData] = useState<OneWordData>({
    hitokoto: '',
    from: '',
  });
  const [cardStatus, setCardStatus] = useState<'loading' | 'success' | 'error'>('loading');

  const getRandomImg = async () => {
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => resolve(true), 1000);
      });
      const response = await fetch(`${BASE_URL.IMG_API}/api.php?fl=fengjing&gs=json`);
      const data = await response.json();
      return data;
    } catch (message) {
      return console.error(message);
    }
  };
  const getOneWord = async () => {
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => resolve(true), 1000);
      });
      const response = await fetch(`${BASE_URL.HITOKOTO_API}`);
      const data = await response.json();
      return data;
    } catch (message) {
      return console.error(message);
    }
  };

  const getData = () => {
    setCardStatus('loading');
    Promise.all([
      getRandomImg(),
      getOneWord(),
    ]).then(([
      imgData,
      oneWordData,
    ]) => {
      setCardStatus('success');
      setImgData(imgData);
      setOneWordData(oneWordData);
    }).catch(() => {
      setCardStatus('error');
    });
  };

  useEffect(() => { getData(); }, []);

  return <>
    <div className={styles.wrapper}>
      {cardStatus === 'loading' ? (
        <BouncyLoad />
      ) : cardStatus === 'success' ? (
        <div className={styles.container}>
          <Image
            src={imgData.imgurl}
            width={imgData.width}
            height={imgData.height}
            alt='scenery'
            priority={true}
            className={styles.image}
          />
          <div className={styles['one-word']}>
            <div className={styles['content']}>
              <div className={styles['text']}>
                {oneWordData.hitokoto}
              </div>
              <div className={styles['from']}>
                —「 {oneWordData.from} 」
              </div>
            </div>
          </div>
          <div className={styles.btns}>
            <button className={styles.refresh} onClick={getData}>
              <RefreshCwIcon size={16} />Refresh
            </button>
          </div>
        </div>
      ) : cardStatus === 'error' ? (
        <>Load Error!</>
      ) : null}
    </div>
  </>
};

export default MoodCard;