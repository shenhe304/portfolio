// fade-in
document.addEventListener('DOMContentLoaded', function () {
    var scrollAnimationElms = document.querySelectorAll('.js-scrollUp, .js-scrollLeft, .js-scrollRight, .js-scrollSway, .js-scrollFall');
  
    var scrollAnimationFunc = function () {
      for (var i = 0; i < scrollAnimationElms.length; i++) {
        var triggerMargin = 60;
        if (window.innerHeight > scrollAnimationElms[i].getBoundingClientRect().top + triggerMargin) {
          scrollAnimationElms[i].classList.add('on');
        }
      }
    };
  
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
  });