let myLibrary = [];

let modalBackground = document.querySelector(".modal-faded-background")
let filmContainer = document.querySelector(".film-display");
const modal = document.querySelector(".modal-content");
const form = document.getElementById('addFilmForm');
const title = document.getElementById('title');
const director = document.getElementById('director');
const poster = document.getElementById('poster');

class Film { // Film constructor
    constructor(title, director, poster = "imgs/missing-poster.png") {
        this.title = title;
        this.director = director;
        this.poster = poster;
    }
}

function addFilm() { // Add film to catalog
    const newFilm = new Film(title, director, poster)

    createFilm();
}

function createFilm() { // Creates the film object
    let deleteBtn = document.createElement('img');
    let filmTitle = document.createElement('p');
    let slot = document.createElement('div');
    deleteBtn.src = "imgs/trash.svg";
    filmContainer.appendChild(slot).className = "film-item";
    slot.appendChild(deleteBtn).id = "delete-film";
    slot.appendChild(filmTitle).className = "film-title";
}

function clearForm() {
    title.value = "";
    director.value = "";
    poster.value = "";
}

function revealModal() { // Reveals the modal form
    modal.classList.remove("hidden");
    modal.classList.add("active", "expand-animation");
    modalBackground.classList.add("fade-active");
}

function hideModal() { // Hides the modal form
    modal.classList.remove("active", "expand-animation");
    modal.classList.add("hidden");
    modalBackground.classList.remove("fade-active");
}