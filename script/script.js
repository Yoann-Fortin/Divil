function getURL() {
  return window.location.pathname;
}

const buttons = document.getElementsByClassName("a-btn");

// Parcourir chaque bouton et ajouter un écouteur d'événements à chacun
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const redirect = button.href.split("/")[3];
    console.log(redirect);
  });
});

// Add picture arrow in section on homepage
const arrowImage = document.createElement("img");
arrowImage.src = "../assets/images/arrow-down.png";
const sectionElement = document.querySelector("section");
const aElement = sectionElement.querySelector("a");
sectionElement.insertBefore(arrowImage, aElement);
