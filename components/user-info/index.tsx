import Image from 'next/image';
import styles from './index.module.css';
import { MailIcon, MapPinIcon,  } from 'lucide-react';
import { GitHubIcon } from '@/components/icons/github-icon';

const UserInfo = () => {
  const email = 'zou.hai@outlook.com';
  const githubUrl = 'https://github.com/hai-zou';
  const location = 'https://www.google.com/maps/place/ganzhou';

  return <>
    <div className={styles.wrapper}>
      <Image
        src="https://image.luckyzh.cn/user/avatar.jpg"
        width={100}
        height={100}
        alt='avatar'
        className={styles.avatar}
      />
      <div className={styles.intro}>
        冰冻三尺非一日之寒，滴水穿石非一日之功。
      </div>
      <div className={styles.social}>
        <a className={styles.icon} href={location} target="_blank">
          <MapPinIcon width={16} height={16} />
        </a>
        <a className={styles.icon} href={`mailto:${email}`}>
          <MailIcon width={16} height={16} />
        </a>
        <a className={styles.icon} href={githubUrl} target='_blank'>
          <GitHubIcon width={16} height={16} />
        </a>
      </div>
    </div>
  </>
};

export default UserInfo;