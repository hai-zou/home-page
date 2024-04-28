import { MailIcon, MapPinIcon } from "lucide-react";
import { ProjectCardData } from "./project-card";
import { UserCardData } from "./user-card";
import { GitHubIcon } from "@/components/icons/github-icon";
import { JuejinIcon } from "@/components/icons/juejin-icon";

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
        icon: <MapPinIcon width={16} height={16} />,
        openNewPage: true,
      },
      {
        name: 'Email',
        url: 'mailto:zou.hai@outlook.com',
        icon: <MailIcon width={16} height={16} />,
        openNewPage: false,
      },
      {
        name: 'Github',
        url: 'https://github.com/hai-zou',
        icon: <GitHubIcon width={16} height={16} />,
        openNewPage: true,
      },
      {
        name: '掘金主页',
        url: 'https://juejin.cn/user/202789929622183/posts',
        icon: <JuejinIcon width={16} height={16} />,
        openNewPage: true,
      },
    ],
    describe: 'Only by experiencing the hardest hardships can one rise above the ordinary.',
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