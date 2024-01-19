var luminousTrigger = document.querySelectorAll('.luminous');

var options = {
  caption: function (trigger) {
    return trigger.querySelector('img').getAttribute('alt');
  },
};

if (luminousTrigger.length > 0) {
  new LuminousGallery(luminousTrigger, {}, options);
}