import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    galleryItems =>
      `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src=${galleryItems.preview}
            data-source=${galleryItems.original}
            alt=${galleryItems.description}
          />
        </a>
      </div>`
  )
  .join('');

list.innerHTML = markup;

list.addEventListener('click', onTagsClick);

function onTagsClick(e) {
  e.preventDefault();
  if (e.target.className !== 'gallery__image') {
    return;
  }

  const instance = basicLightbox.create(`
  <li><img class="gallery__item" src=${e.target.dataset.source}></li>
`);

  instance.show();

  list.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      instance.close();
    }
  });
}
