$(document).ready(function () {
  $.getJSON('data.json', function (data) {
      var currentPage = 'web-syohin';

      $('title').text(data[currentPage].title);
      $('og_title').text(data[currentPage].og_title);
      $('h1').text(data[currentPage].h1);
  });
});