import { QuoteIcon } from 'lucide-react';
import style from './index.module.css';

interface OneWordProps {
  text: string;
  from: string;
}

const OneWord = (props: OneWordProps) => {
  const { text, from } = props;
  return <>
    <div className={style.wrapper}>
      <div>
        <QuoteIcon
          size={18}
          className={style['left-quote']}
        />
      </div>
      <div className={style['content']}>
        <div className={style['text']}>
          {text}
        </div>
        <div className={style['from']}>
          —「 {from} 」
        </div>
      </div>
      <div className={style['right-quote-wrap']} >
        <QuoteIcon size={18} />
      </div>
    </div>
  </>
}

export default OneWord;