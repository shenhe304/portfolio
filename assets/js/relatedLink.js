// document.addEventListener("DOMContentLoaded", function() {
//   // 関連リンクのデータ（各ページのURLやタイトルなど）をここで定義する
//   var relatedWorks = [
//       { url: "/works/web-syohin.html", title: "Work 1" },
//       { url: "/works/web-rikon.html", title: "Work 2" },
//       { url: "/works/web-portfolio.html", title: "Work 3" },
//       { url: "/works/ui-sign-up.html", title: "The design of sign up" },
//       // 追加の関連リンクをここで定義する
//   ];

//   // ページに表示する関連リンクの数
//   var numRelatedLinksToShow = 3;

//   // ページ上の関連リンクリストの要素を取得
//   var relatedWorksList = document.getElementById("related-works-list");

//   // ランダムに関連リンクを選択
//   var shuffledWorks = relatedWorks.sort(() => Math.random() - 0.5).slice(0, numRelatedLinksToShow);

//   // リストに関連リンクを追加
//   shuffledWorks.forEach(function(work) {
//       var listItem = document.createElement("li");
//       var link = document.createElement("a");
//       link.href = work.url;
//       link.textContent = work.title;
//       listItem.appendChild(link);
//       relatedWorksList.appendChild(listItem);
//   });
// });






document.addEventListener("DOMContentLoaded", function () {
  // 関連リンクのデータ（各ページのURLやタイトル、サムネイル画像など）をここで定義する
  var relatedWorks = [
    { url: "/works/web-syohin.html", title: "The official website design", thumbnail: "../assets/img/top/img-work-syohin.jpg" },
    { url: "/works/web-rikon.html", title: "The design of Landing Page", thumbnail: "../assets/img/top/img-work-rikon.jpg" },
    { url: "/works/web-portfolio.html", title: "Work 3", thumbnail: "path/to/thumbnail3.jpg" },
    { url: "/works/ui-sign-up.html", title: "The design of sign up", thumbnail: "../assets/img/works/img-work-signup.jpg" },
    { url: "/works/ui-jiko.html", title: "Banner on the blog", thumbnail: "../assets/img/top/img-work-jiko01.jpg" },
    { url: "/works/ui-credit-card.html", title: "Payment of online javascript school", thumbnail: "../assets/img/top/img-work-credit.jpg" },
    { url: "/works/ui-calculator.html", title: "Calculator", thumbnail: "../assets/img/top/img-work-calculator.jpg" },
  ];

  // ページに表示する関連リンクの数
  var numRelatedLinksToShow = 3;

  // ページ上の関連リンクリストの要素を取得
  var relatedWorksList = document.getElementById("related-works-list");

  // ランダムに関連リンクを選択
  var shuffledWorks = relatedWorks.sort(() => Math.random() - 0.5).slice(0, numRelatedLinksToShow);

  // リストに関連リンクを追加
  shuffledWorks.forEach(function (work) {
    var listItem = document.createElement("li");
    var link = document.createElement("a");
    link.href = work.url;
    
    // サムネイル画像の要素を作成して追加
    var thumbnail = document.createElement("img");
    thumbnail.src = work.thumbnail;
    thumbnail.alt = "Thumbnail for " + work.title;
    thumbnail.className = "p-work__mainVisual";
    link.appendChild(thumbnail);
    
    link.textContent = work.title;
    listItem.appendChild(link);
    relatedWorksList.appendChild(listItem);
  });
});
