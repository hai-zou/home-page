import Image from 'next/image';
import styles from './index.module.css';
import { MailIcon, MapPinIcon  } from 'lucide-react';
import { GitHubIcon } from '@/components/icons/github-icon';
import { JuejinIcon } from '@/components/icons/juejin-icon';

const UserInfo = () => {
  const email = 'zou.hai@outlook.com';
  const githubUrl = 'https://github.com/hai-zou';
  const location = 'https://www.google.com/maps/place/ganzhou';
  const juejinUrl = 'https://juejin.cn/user/202789929622183/posts';

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
        <a className={styles.icon} href={location} target="_blank" title='Location'>
          <MapPinIcon width={16} height={16} />
        </a>
        <a className={styles.icon} href={`mailto:${email}`} title='Email'>
          <MailIcon width={16} height={16} />
        </a>
        <a className={styles.icon} href={githubUrl} target='_blank' title='Github'>
          <GitHubIcon width={16} height={16} />
        </a>
        <a className={styles.icon} href={juejinUrl} target='_blank' title='掘金主页'>
          <JuejinIcon width={16} height={16} />
        </a>
      </div>
    </div>
  </>
};

export default UserInfo;