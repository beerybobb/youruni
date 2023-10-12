//simple way to see if a link starts with a protocol and just add http by default
export const urlValidate = (url:string) => {
  if (!url.startsWith("http")) {
   return url = "http://" + url;
  }
  return url
};
