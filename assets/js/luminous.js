var luminousTrigger = document.querySelector('.luminous');
if( luminousTrigger !== null ) {
new Luminous(luminousTrigger);
}


var luminousTrigger = document.querySelectorAll('.luminous');
if( luminousTrigger !== null ) {
  new LuminousGallery(luminousTrigger);
}