import styles from './index.module.css';
import CardioLoad from '@/components/loading/cardio-load';

const LoadingPage = (props: { isLoading: boolean; }) => {
  const { isLoading } = props;

  return <>
    <div id={styles['loader-wrapper']} className={`${!isLoading ? styles.loaded : ''}`}>
      <div className={styles.loader}>
        <CardioLoad size={100} />
      </div>
      <div className={`${styles['loader-section']} ${styles['section-left']}`} />
      <div className={`${styles['loader-section']} ${styles['section-right']}`} />
    </div>
  </>
};

export default LoadingPage;