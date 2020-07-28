export const getLang = (path) => {
  let reg = /\.([\w-]+)\.mdx/i;
  let m = path.match(reg)
  if (m) {
    return m[1];
  }
  return 'en-us';
}