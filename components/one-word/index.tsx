import { QuoteIcon } from 'lucide-react';
import style from './index.module.css';
import { useEffect, useState } from 'react';
import BouncyLoad from '@/components/loading/bouncy-load';

interface OneWordData {
  hitokoto: string;
  from: string;
}

const OneWord = (props: { loadComplete: () => void }) => {
  const [oneWordData, setOneWordData] = useState<OneWordData>({
    hitokoto: '',
    from: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const getOneWord = () => {
    setIsLoading(true);
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(true), 1000);
    }).then(() => {
      return fetch('https://v1.hitokoto.cn', { mode: 'cors' });
    })
    .then(response => response.json())
    .then(data => {
      setOneWordData(data);
    })
    .catch(console.error)
    .finally(() => {
      setIsLoading(false);
      props.loadComplete();
    });
  };

  useEffect(() => getOneWord(), []);

  return <div className={style.container}>
    {!isLoading ? <div className={style.wrapper}>
      <div>
        <QuoteIcon
          size={18}
          className={style['left-quote']}
        />
      </div>
      <div className={style['content']}>
        <div className={style['text']}>
          {oneWordData.hitokoto}
        </div>
        <div className={style['from']}>
          —「 {oneWordData.from} 」
        </div>
      </div>
      <div className={style['right-quote-wrap']} >
        <QuoteIcon size={18} />
      </div>
    </div>: <BouncyLoad />}
  </div>
}

export default OneWord;