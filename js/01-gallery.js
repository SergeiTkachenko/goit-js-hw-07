import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    galleryItems =>
      `<div class="gallery__item">
        <a 
        class="gallery__link" 
        href=${galleryItems.original}>
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

// ---------------------- мой первый варинт
// function onTagsClick(e) {
//   e.preventDefault();
//   if (e.target.className !== 'gallery__image') {
//     return;
//   }

//   const instance = basicLightbox.create(`
//   <li><img class="modal-img" src=${e.target.dataset.source}></li>
// `);

//   instance.show();

//   list.addEventListener('keydown', e => {
//     if (e.code === 'Escape') {
//       instance.close();
//     }
//   });
// }
// ---------------------- мой первый варинт конец

// ----------------------варинт от ментора

const instance = basicLightbox.create(`<img class="modal-img" src=''>`, {
  onShow: instance => {
    window.addEventListener('keydown', onEscClick);
  },
  onClose: instance => {
    window.removeEventListener('keydown', onEscClick);
  },
});

function onTagsClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  instance.element().querySelector('img').src = e.target.dataset.source;

  instance.show();
}

function onEscClick(e) {
  if (e.key === 'Escape') {
    instance.close();
    return;
  }
}
