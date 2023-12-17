document.addEventListener("DOMContentLoaded", function() {
  // 関連リンクのデータ（各ページのURLやタイトルなど）をここで定義する
  var relatedWorks = [
      { url: "/works/web-syohin.html", title: "Work 1" },
      { url: "/works/web-rikon.html", title: "Work 2" },
      { url: "/works/web-portfolio.html", title: "Work 3" },
      { url: "/works/ui-sign-up.html", title: "The design of sign up" },
      // 追加の関連リンクをここで定義する
  ];

  // ページに表示する関連リンクの数
  var numRelatedLinksToShow = 3;

  // ページ上の関連リンクリストの要素を取得
  var relatedWorksList = document.getElementById("related-works-list");

  // ランダムに関連リンクを選択
  var shuffledWorks = relatedWorks.sort(() => Math.random() - 0.5).slice(0, numRelatedLinksToShow);

  // リストに関連リンクを追加
  shuffledWorks.forEach(function(work) {
      var listItem = document.createElement("li");
      var link = document.createElement("a");
      link.href = work.url;
      link.textContent = work.title;
      listItem.appendChild(link);
      relatedWorksList.appendChild(listItem);
  });
});