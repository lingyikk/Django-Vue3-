// 使用URL类实例来动态加载静态资源 ---> 将其src路径进行拼接
const getAssetURL = (image) => {
  // URL中的的路径为当前文件的相对路径
  return new URL(`../assets/img/${image}`, import.meta.url).href;
};

export default getAssetURL