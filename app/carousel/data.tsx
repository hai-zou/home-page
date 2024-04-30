import { MailIcon, MapPinIcon } from "lucide-react";
import { nanoid } from 'nanoid'
import { ProjectCardData } from "./project-card";
import { UserCardData } from "./user-card";
import { GitHubIcon } from "@/components/icons/github-icon";
import { JuejinIcon } from "@/components/icons/juejin-icon";
import ClockCard from "./clock-card";
import MoodCard from "./mood-card";

interface CustomCard {
  id: string;
  type: 'custom';
  name: string;
  children: React.ReactNode;
}

type AllCard = ProjectCardData | UserCardData | CustomCard;

export const carouselList: Array<AllCard> = [
  {
    id: nanoid(),
    type: 'project',
    previewImg: '/images/no-image.png',
    name: 'Empty',
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
    id: nanoid(),
    type: 'project',
    previewImg: '/images/barrage-preview.png',
    name: 'Web Barrage',
    tags: [
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'JavaScript', color: '#F1E05A' },
      { name: 'HTML', color: '#E34C26' },
      { name: 'CSS', color: '#563D7C' },
    ],
    describe: '🎉 Web 端弹幕组件',
    codeUrl: 'https://github.com/hai-zou/web-barrage',
    demoUrl: 'https://hai-zou.github.io/web-barrage/',
  },
  {
    id: nanoid(),
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
    id: nanoid(),
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
    id: nanoid(),
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
    id: nanoid(),
    type: 'custom',
    name: 'mood',
    children: <MoodCard />,
  },
  {
    id: nanoid(),
    type: 'custom',
    name: 'clock',
    children: <ClockCard />,
  },
];