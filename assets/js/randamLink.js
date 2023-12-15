    // ランダムなリンクのデータ
    var linksData = [
      { text: "Random Link 1", url: "https://example.com/link1" },
      { text: "Random Link 2", url: "https://example.com/link2" },
      // 追加のランダムなリンクをここに追加
  ];

  // ページが読み込まれたときに実行する関数
  document.addEventListener('DOMContentLoaded', function () {
      // ランダムなリンクを取得
      var randomLink = getRandomLink();

      // ランダムなリンクを表示する要素を取得
      var randomLinksContainer = document.getElementById('randomLinks');

      // リンクを作成して表示
      var linkElement = document.createElement('a');
      linkElement.textContent = randomLink.text;
      linkElement.href = randomLink.url;
      linkElement.target = "_blank"; // リンクを新しいタブで開く場合

      randomLinksContainer.appendChild(linkElement);
  });

  // ランダムなリンクを取得する関数
  function getRandomLink() {
      var randomIndex = Math.floor(Math.random() * linksData.length);
      return linksData[randomIndex];
  }