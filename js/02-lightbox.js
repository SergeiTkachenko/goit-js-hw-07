import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    galleryItems =>
      `<li>
      <a class="gallery__item" 
      href=${galleryItems.original}>
      <img class="gallery__image" 
      src=${galleryItems.preview} 
      alt=${galleryItems.description} />
    </a>
    </li>`
  )
  .join('');

list.innerHTML = markup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
