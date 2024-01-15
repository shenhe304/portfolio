var luminousTrigger = document.querySelector('.luminous');
if( luminousTrigger !== null ) {
new Luminous(luminousTrigger);
}


var luminousTrigger = document.querySelectorAll('.luminous');
if( luminousTrigger !== null ) {
  new LuminousGallery(luminousTrigger);
}

const luminousOpts = {
  sourceAttribute: 'data-luminous',
  caption: (trigger) => {
    return trigger.parentElement.querySelector('img').getAttribute('alt');
  },
} 
const luminousGalleryElems = document.querySelectorAll('.luminous');
if( luminousGalleryElems.length > 0 ) {
  new LuminousGallery(luminousGalleryElems, {}, luminousOpts);
} 