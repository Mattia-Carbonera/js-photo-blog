// ottengo i nodi
const cardContainer = document.getElementById("card-container");

// genero le card
fetch("https://jsonplaceholder.typicode.com/photos?_limit=6").then((Response) =>
  Response.json().then((data) => {
    // codice
    // console.log(data[0].url)
    const objectsArray = data;

    for (let i = 0; i < 6; i++) {
      const currentPhoto = objectsArray[i].url;
      const currentTitle = objectsArray[i].title;

      // trasformo le prime lettere in maiuscolo
      const currentTitleSplitted = currentTitle.split(" ");
      let upperCaseTitol = "";

      currentTitleSplitted.map(
        (word) =>
          (upperCaseTitol += word.charAt(0).toUpperCase() + word.slice(1) + " ")
      );

      //   stampo in HTML
      cardContainer.innerHTML += `<div class="card col-md-5 col-lg-3">
            <img src="${currentPhoto}" alt="Photo" />
            <p>${upperCaseTitol}</p>
            <div class="circle">
              <img src="./img/pin.svg" alt="" />
            </div>
          </div>`;
    }
  })
);

// const stringaProva = "ciao oggi vado in palestra".split(" ");
// const newString = stringaProva.map(
//   (word) => word.charAt(0).toUpperCase() + word.slice(1)
// );
// console.log(newString);
