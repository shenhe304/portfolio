document.addEventListener('DOMContentLoaded', function () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'data.json', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      var currentPage = 'web-syohin';

      document.title = data[currentPage].title;
      // メタタグに設定する場合
      var ogTitleTag = document.querySelector('meta[property="og:title"]');
      if (ogTitleTag) {
        ogTitleTag.setAttribute('content', data[currentPage].og_title);
      }

      var h1Element = document.querySelector('h1');
      if (h1Element) {
        h1Element.textContent = data[currentPage].h1;
      }
    }
  };
  xhr.send();
});