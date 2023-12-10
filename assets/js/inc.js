// include.js
function includeHTML(elementId, file) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", file, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const content = xhr.responseText;
      document.getElementById(elementId).innerHTML = content;
    }
  };
  xhr.send();
}

// index.html
includeHTML("header", "inc/header.html");
includeHTML("footer", "inc/footer.html");

// subPage.html
includeHTML("header", "inc/header.html");
includeHTML("footer", "inc/footer.html");