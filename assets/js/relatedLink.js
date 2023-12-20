// relatedLink.js
document.addEventListener("DOMContentLoaded", function () {
  var relatedWorks = [
    { url: "../works/web-syohin.html", title: "The official website design", thumbnail: "img-work-syohin.jpg" },
    { url: "../works/web-rikon.html", title: "The design of Landing Page", thumbnail: "img-work-rikon.jpg" },
    { url: "../works/ui-sign-up.html", title: "The design of sign up", thumbnail: "img-work-signup.jpg" },
    { url: "../works/ui-jiko.html", title: "Banner on the blog", thumbnail: "img-work-jiko01.jpg" },
    { url: "../works/ui-credit-card.html", title: "Payment of online javascript school", thumbnail: "img-work-credit.jpg" },
    { url: "../works/ui-calculator.html", title: "Calculator", thumbnail: "img-work-calculator.jpg" },
  ];

  var numRelatedLinksToShow = 3;
  var relatedWorksList = document.getElementById("js-related-works__list");

  // Check if relatedWorksList exists before proceeding
  if (relatedWorksList) {
    var shuffledWorks = shuffleArray(relatedWorks).slice(0, numRelatedLinksToShow);

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    shuffledWorks.forEach(function (work) {
      var listItem = document.createElement("li");
      var link = document.createElement("a");
      link.href = work.url;

      var thumbnail = document.createElement("img");
      thumbnail.src = "../assets/img/top/" + work.thumbnail;
      thumbnail.alt = "Thumbnail for " + work.title;
      thumbnail.className = "p-related__thumbnail";

      // Error handling for image loading
      thumbnail.onerror = function () {
        console.error("Error loading image: ../assets/img/top/" + work.thumbnail);
      };

      link.appendChild(thumbnail);
      link.textContent = work.title;
      listItem.appendChild(link);
      relatedWorksList.appendChild(listItem);
    });


  } else {
    console.error("Error: Element with id 'js-related-works__list' not found");
  }
});
