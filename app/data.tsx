import { MailIcon, MapPinIcon, LinkIcon } from "lucide-react";
import { nanoid } from 'nanoid'
import { GitHubIcon } from "@/components/icons/github-icon";
import { JuejinIcon } from "@/components/icons/juejin-icon";
import { AllCard } from "@/app/cards";

export const displayList: Array<AllCard> = [
  {
    id: nanoid(),
    type: 'user',
    avatar: 'https://imgs.izou.top/user/avatar.jpg',
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
        name: 'Blog',
        url: 'https://blog.izou.top',
        icon: <LinkIcon width={16} height={16} />,
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
    type: 'project',
    previewImg: '/images/hexo-theme.png',
    name: 'Hexo Theme Sea',
    tags: [
      { name: 'JavaScript', color: '#F1E05A' },
      { name: 'CSS', color: '#563D7C' },
      { name: 'Nunjucks', color: '#3D8137' },
    ],
    describe: '📝 Hexo Theme | Blog Theme',
    codeUrl: 'https://github.com/hai-zou/hexo-theme-sea',
    demoUrl: 'https://hai-zou.github.io/hexo-theme-sea',
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
    demoUrl: 'https://hai-zou.github.io/web-barrage',
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
    codeUrl: '',
    demoUrl: 'https://travel.izou.top',
  },
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
];