let modal = document.querySelector(".modal-content");
let modalBackground = document.querySelector(".modal-faded-background")
let myLibrary = [];

function Film(title, director, img = "imgs/missing-poster.png") {
    this.title = title;
    this.director = director;
    this.img = img;
}

function addFilm() {
    let filmContainer = document.querySelector(".film-display");
    let deleteBtn = document.createElement('img');
    let filmTitle = document.createElement('p');
    let slot = document.createElement('div');
    let s = 4;
    deleteBtn.src = "imgs/trash.svg";
    filmContainer.appendChild(slot).className = "film-item";
    slot.appendChild(deleteBtn).id = "delete-film";
    slot.appendChild(filmTitle).className = "film-title";
    slot.id = `film-${++s}`;
}

function revealModal() {
    modal.classList.remove("hidden");
    modal.classList.add("active", "expand-animation");
    modalBackground.classList.add("fade-active");
}

function hideModal() {
    modal.classList.remove("active", "expand-animation");
    modal.classList.add("hidden");
    modalBackground.classList.remove("fade-active");
}