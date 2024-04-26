const BASE_URL = process.env.NODE_ENV === 'production' ?
{
  "IMG_API": 'https://imgapi.cn',
  "HITOKOTO_API": 'https://v1.hitokoto.cn',
}: {
  "IMG_API": '/imgapi',
  "HITOKOTO_API": '/hitokoto',
};

export default BASE_URL; 