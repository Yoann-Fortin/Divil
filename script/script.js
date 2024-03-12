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
