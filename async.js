function fetchDataFromApi() {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const main = document.querySelector("#main");

  fetch(url)
    .then((response) => {
      response
        .json()
        .then((photos) => {
          for (photo of photos) {
            const article = document.createElement("article");
            const title = document.createElement("h2");
            const thumb = document.createElement("img");

            thumb.src = photo.thumbnailUrl;
            title.textContent = photo.title;

            article.setAttribute("id", photo.id);
            article.appendChild(thumb);
            article.appendChild(title);

            main.appendChild(article);
          }
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
}

fetchDataFromApi();
