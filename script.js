let modal = document.querySelector(".modal-content");
let myLibrary = [];

function Film() {

}

function addFilm() {
    let filmContainer = document.querySelector(".film-display");
    let slot = document.createElement('div');
    let s = 4;
    filmContainer.appendChild(slot).className = "film-item"
    slot.id = `film-${++s}`;
}

function revealModal() {
    modal.classList.remove("hidden");
    modal.classList.add("active");
}

function hideModal() {
    modal.classList.remove("active");
    modal.classList.add("hidden");
}