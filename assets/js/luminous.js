var luminousTrigger = document.querySelector('.luminous');
if( luminousTrigger !== null ) {
new Luminous(luminousTrigger);
}


var luminousTrigger = document.querySelectorAll('.luminous');
if( luminousTrigger !== null ) {
  new LuminousGallery(luminousTrigger);
}

var options = {
  caption: function (trigger) {
    return trigger.querySelector('img').getAttribute('alt');
  },
}
var luminousTrigger = document.querySelectorAll('.luminous');

new LuminousGallery(luminousTrigger, {}, options);