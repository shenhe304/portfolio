   // ページが読み込まれたときに実行する関数
   document.addEventListener('DOMContentLoaded', function () {
    // /works/ ディレクトリ内のページリンクを取得
    var worksLinks = document.querySelectorAll('a[href^="/works/"]');

    // ランダムなリンクを取得
    var randomLink = getRandomLink(worksLinks);

    // ランダムなリンクを表示する要素を取得
    var randomWorksLinkContainer = document.getElementById('randomWorksLink');

    // リンクを作成して表示
    var linkElement = document.createElement('a');
    linkElement.textContent = randomLink.textContent;
    linkElement.href = randomLink.href;
    linkElement.target = "_blank"; // リンクを新しいタブで開く場合

    randomWorksLinkContainer.appendChild(linkElement);
});

// ランダムなリンクを取得する関数
function getRandomLink(links) {
    var randomIndex = Math.floor(Math.random() * links.length);
    return links[randomIndex];
}