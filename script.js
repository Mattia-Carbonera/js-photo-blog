// ottengo i nodi
const cardContainer = document.getElementById("card-container");

// genero le card

const fetchCard = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=6"
  ).then((Response) =>
    Response.json().then((data) => {
      // codice
      const objectsArray = data;

      for (let i = 0; i < 6; i++) {
        const currentPhoto = objectsArray[i].url;
        const currentTitle = objectsArray[i].title;

        // trasformo le prime lettere in maiuscolo
        const currentTitleSplitted = currentTitle.split(" ");
        let upperCaseTitol = "";

        currentTitleSplitted.map(
          (word) =>
            (upperCaseTitol +=
              word.charAt(0).toUpperCase() + word.slice(1) + " ")
        );

        //   stampo in HTML
        cardContainer.innerHTML += `<div class="card col-md-5 col-lg-3" id="card-id">
                <img src="${currentPhoto}" alt="Photo" class="image-card" />
                <p>${upperCaseTitol}</p>
                <div class="circle">
                  <img src="./img/pin.svg" alt="" />
                </div>
              </div>`;
      }

      // gestisco il layover
      const layoverContainer = document.getElementById("layover");
      const layoverImageContainer = document.getElementById("layover-image");
      const CardEl = document.querySelectorAll(".card");
      const image = document.querySelectorAll(".image-card");

      // aggiungo addEventListener e immagini
      for (let i = 0; i < CardEl.length; i++) {
        image[i].addEventListener("click", function (e) {
          layoverContainer.classList.remove("d-none");

          layoverImageContainer.innerHTML = `<img src="${this.src}" alt="" />`;
        });
      }

      const buttonLayover = document.getElementById("layover-button-close");
      buttonLayover.addEventListener("click", function () {
        layoverContainer.classList.add("d-none");
      });
    })
  );
};

fetchCard();
