// pop-up
  function showPopup(imageSrc) {
    // over lay
    document.getElementById('js-overLay').style.display = 'flex';
    // src
    document.getElementById('popUpImage').src = imageSrc;

    centerPopup();
  }

  // show or hide
  function hidePopup() {
    document.getElementById('js-overLay').style.display = 'none';
  }

  // center of viewport
  function centerPopup() {
    var popup = document.getElementById('js-popUp');
    var viewportHeight = window.innerHeight;
    var popupHeight = popup.clientHeight;

    var topPosition = (viewportHeight - popupHeight) / 2;
    popup.style.top = topPosition + 'px';
  }

  window.addEventListener('resize', centerPopup);