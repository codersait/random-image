export function getImage(url) {
  const image = new Image();
  image.src = url;
  return image;
}