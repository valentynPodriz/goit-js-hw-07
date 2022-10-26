import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryRef = document.querySelector(".gallery")
const galleryMarkup = createMarkup(galleryItems);
galleryRef.innerHTML = galleryMarkup;

galleryRef.addEventListener("click", onImageClick);

function createMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return ` 
<div class="gallery__item">
  <a class="gallery__link href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    }).join("");
};
function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  };
  const instance = basicLightbox.create(
    `
    <img src=${event.target.dataset.source} "width = "800" height = "600">
` ,{
    onShow: (instance) => {
      document.addEventListener("keydown", onEscCloseModal);
    },
  
    onClose: (instence) => {
      onEscCloseModal(event);
      document.removeEventListener("keydown", onEscCloseModal);
    }
  },
  );
        
        
  instance.show(); 

  function onEscCloseModal(event) {
  if (event.code === "Escape") {
    instance.close();
   };
};
};





 

