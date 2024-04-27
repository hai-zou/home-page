import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import styles from './index.module.css';
import Image from "next/image";
import { CodeXmlIcon } from "lucide-react";

const Projects = () => {
  const projectList = [
    {
      previewImg: '/images/no-image.png',
      name: 'Empty1',
      tags: [
        { name: 'HTML', color: '#E34C26' },
        { name: 'CSS', color: '#563D7C' },
        { name: 'JavaScript', color: '#F1E05A' },
      ],
      describe: 'Nothing, It is placeholder',
      codeUrl: '',
      demoUrl: '',
    },
    {
      previewImg: '/images/no-image.png',
      name: 'Empty2',
      tags: [
        { name: 'HTML', color: '#E34C26' },
        { name: 'CSS', color: '#563D7C' },
        { name: 'JavaScript', color: '#F1E05A' },
      ],
      describe: 'Nothing, It is placeholder',
      codeUrl: '',
      demoUrl: '',
    },
    {
      previewImg: '/images/blog-preview.png',
      name: 'Hexo Blog',
      tags: [
        { name: 'JavaScript', color: '#F1E05A' },
        { name: 'CSS', color: '#563D7C' },
        { name: 'Nunjucks', color: '#3D8137' },
      ],
      describe: 'Personal Blog 📝 | Front-end technology sharing',
      codeUrl: 'https://github.com/hai-zou/hexo-blog',
      demoUrl: 'https://www.luckyzh.cn',
    },
    {
      previewImg: '/images/travel-preview.png',
      name: 'Travel Record',
      tags: [
        { name: 'JavaScript', color: '#F1E05A' },
        { name: 'HTML', color: '#E34C26' },
      ],
      describe: '🌍 记录每一个到过的地方！',
      codeUrl: 'https://github.com/hai-zou/travel-record',
      demoUrl: 'https://travel-record.luckyzh.cn',
    },
    {
      previewImg: '/images/no-image.png',
      name: 'Empty3',
      tags: [
        { name: 'HTML', color: '#E34C26' },
        { name: 'CSS', color: '#563D7C' },
        { name: 'JavaScript', color: '#F1E05A' },
      ],
      describe: 'Nothing, It is placeholder',
      codeUrl: '',
      demoUrl: '',
    },
  ];
  const isAllowJump = (url: string) => {
    if (!url) {
      return {};
    }
    return { href: url, target: '_blank' };
  };
  return (
    <Swiper
      modules={[EffectCoverflow, Pagination]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      className={styles['my-swiper']}
      initialSlide={Math.ceil(projectList.length / 2) - 1}
    >
      {projectList.map(item => (
        <SwiperSlide key={item.name} className={styles['swiper-slide']}>
          <Image
            src={item.previewImg}
            width={300}
            height={300}
            alt="blog-preview"
          />
          <div className={styles.info}>
            <h3 className={styles.name}>
              {item.name}
            </h3>
            <div className={styles.tags}>
              {item.tags.map(tag => (
                <span key={tag.name} className={styles['tag-wrap']}>
                  <span
                    className={styles.dot}
                    style={{ background: tag.color }}
                  ></span>
                  <span className={styles.tag}>
                    {tag.name}
                  </span>
                </span>
              ))}
            </div>
            <div>{item.describe}</div>
          </div>
          <div className={styles['operate-btn']}>
            <a className={styles['view-code']} { ...isAllowJump(item.codeUrl) }>
              <CodeXmlIcon />
            </a>
            <a className={styles['view-demo']} { ...isAllowJump(item.demoUrl) }>
              Live View
            </a>
          </div>
        </SwiperSlide>
      ))}
      
    </Swiper>
  );
};

export default Projects;
