const form = document.getElementById('addFilmForm');
const saveBtn = document.getElementById('saveBtn');
const exitBtn = document.getElementById('exitBtn');
const filmContainer = document.querySelector(".film-display");
const modalBackground = document.querySelector(".modal-faded-background")
const modal = document.querySelector(".modal-content");

class Film { // Film constructor
    constructor(id, title, director, poster) {
        this.id = id;
        this.title = title;
        this.director = director;
        this.poster = poster;
    }
}

let myLibrary = [];

function createFilm() { // Creates the film object
    myLibrary.forEach(Film => {
        let filmSlot = document.createElement('div');
        let deleteBtn = document.createElement('img');
        let filmPoster = document.createElement('img');
        let filmTitle = document.createElement('p');
        let filmDirector = document.createElement('p');
        filmTitle.textContent = Film.title;
        filmDirector.textContent = Film.director;
        deleteBtn.src = "imgs/trash.svg";
        deleteBtn.setAttribute('unique-id', Film.id);
        filmPoster.src = Film.poster;
        filmContainer.appendChild(filmSlot).className = "film-item";
        filmSlot.appendChild(filmPoster).className = "movie-poster";
        filmSlot.appendChild(deleteBtn).id = "delete-film";
        filmSlot.appendChild(filmTitle).className = "film-title";
    })
    checkPoster();
}

function addFilm() { // Add film to catalog
    let id = Date.now();
    let title = document.getElementById('title').value;
    let director = document.getElementById('director').value;
    let poster = document.getElementById('poster').value;
    let newFilm = new Film(id, title, director, poster);
    if (title === title) {
        myLibrary.pop(newFilm);
    }
    myLibrary.push(newFilm);
    createFilm();
}


function checkPoster() {
    const posters = document.querySelectorAll('.movie-poster');
    posters.forEach((poster) => {
        poster.onerror = () => {
            poster.onerror = null;
            poster.src = "https://otv.one/uploads/default_image/thumbnail.jpg";
        }
    })
}

function clearForm() {
    title.value = "";
    director.value = "";
    poster.value = "";
}

saveBtn.addEventListener('click', () => {
    addFilm();
    hideModal();
    clearForm();
})

exitBtn.addEventListener('click', () => {
    hideModal();
    clearForm();
})

function revealModal() { // Reveals the modal form
    modal.classList.remove("hidden");
    modal.classList.add("active", "reveal-animation");
    modalBackground.classList.add("fade-active");
}

function hideModal() { // Hides the modal form
    modal.classList.remove("active", "reveal-animation");
    modal.classList.add("hidden");
    modalBackground.classList.remove("fade-active");
}