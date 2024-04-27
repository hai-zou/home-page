import { ProjectCardData } from "./project-card";
import { UserCardData } from "./user-card";

export const carouselList: Array<ProjectCardData | UserCardData> = [
  {
    type: 'project',
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
    type: 'project',
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
    type: 'user',
    avatar: 'https://image.luckyzh.cn/user/avatar.jpg',
    name: 'A Mortal',
    social: [
      {
        name: 'Location',
        url: 'https://www.google.com/maps/place/ganzhou',
        isNewPage: true,
      },
      {
        name: 'Email',
        url: 'mailto:zou.hai@outlook.com',
        isNewPage: false,
      },
      {
        name: 'Github',
        url: 'https://github.com/hai-zou',
        isNewPage: true,
      },
      {
        name: '掘金主页',
        url: 'https://juejin.cn/user/202789929622183/posts',
        isNewPage: true,
      },
    ],
    describe: 'Nothing, It is placeholder',
  },
  {
    type: 'project',
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
    type: 'project',
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