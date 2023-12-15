document.addEventListener('DOMContentLoaded', function () {
    // /works/ ディレクトリ内の .html ファイルを取得
    fetch('/works/') // ここで実際のパスを指定する必要があります
        .then(response => response.text())
        .then(html => {
            // HTMLからリンクを抽出
            var parser = new DOMParser();
            var doc = parser.parseFromString(html, 'text/html');
            var links = Array.from(doc.querySelectorAll('a[href$=".html"]'));

            // ランダムなリンクを2つ取得
            var randomLinks = getRandomLinks(links, 2);

            // ランダムなリンクを表示する要素を取得
            var randomLinksContainer = document.getElementById('randomLinks');

            // リンクを作成して表示
            randomLinks.forEach(function (link) {
                var linkElement = document.createElement('a');
                linkElement.textContent = link.textContent;
                linkElement.href = link.href;
                linkElement.target = "_blank"; // リンクを新しいタブで開く場合

                randomLinksContainer.appendChild(linkElement);
            });
        })
        .catch(error => console.error("Error fetching /works/: ", error));
});

// ランダムなリンクを取得する関数
function getRandomLinks(links, count) {
    var randomLinks = [];
    while (randomLinks.length < count && links.length > 0) {
        var randomIndex = Math.floor(Math.random() * links.length);
        randomLinks.push(links.splice(randomIndex, 1)[0]);
    }
    return randomLinks;
}