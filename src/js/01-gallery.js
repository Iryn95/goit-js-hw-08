// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";// Add imports above this line

// Change code below this line
const galleryRef = document.querySelector('.gallery');

    const addHtml = galleryItems.map((item) =>
    `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" 
    alt="${item.description}"/>
    </a>`
).join("");

galleryRef.insertAdjacentHTML('beforeend', addHtml)
    let modal = new SimpleLightbox('.gallery__item', {captionsData:'alt', captionDelay:250});
console.log(galleryItems);


