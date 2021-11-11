import { getElement } from "./utils/getElement.js";
import { getImage } from "./utils/getImage.js";
import { reloadPage } from "./utils/reloadPage.js";
try {
  const url = 'https://source.unsplash.com/random';
  const imgContainer = getElement('.img-container')
  const button = getElement('button')
  button.addEventListener('click', reloadPage)

  if (url) {
    const image = getImage(url)
    imgContainer.append(image)
  } else {
    throw new Error('Check the URL');
  }
} catch (error) {
  console.log(error);
}
