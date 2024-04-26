/**
 * /imgapi -> https://imgapi.cn
 * /hitokoto -> https://v1.hitokoto.cn
 */

const BASE_URL = process.env.NODE_ENV === 'production' ?
{
  "IMG_API": '/imgapi',
  "HITOKOTO_API": 'https://v1.hitokoto.cn',
}: {
  "IMG_API": '/imgapi',
  "HITOKOTO_API": '/hitokoto',
};

export default BASE_URL; 