import Image from 'next/image';
import styles from './index.module.css';

export interface UserCardData {
  id: string;
  type: 'user';
  avatar: string;
  name: string;
  social: Array<{
    name: string;
    url: string;
    icon: React.ReactNode,
    openNewPage: boolean;
  }>;
  describe: string;
}

const UserCard = (props: { userData: UserCardData }) => {
  const { userData } = props;

  return <>
    <div className={styles['user-card']}>
      <Image
        src={userData.avatar}
        width={300}
        height={300}
        alt="blog-preview"
        priority={true}
      />
      <div className={styles.info}>
        <h3 className={styles.name}>
          {userData.name}
        </h3>
        <div className={styles.describe}>
          {userData.describe}
        </div>
        <div className={styles.social}>
          {userData.social.map(social => (
            <a
              key={social.url}
              className={styles.icon}
              href={social.url}
              title={social.name}
              {...(social.openNewPage ? {target: "_blank"} : {})}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </>
};

export default UserCard;