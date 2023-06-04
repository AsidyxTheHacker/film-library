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

class CreateFilm { // Creates the film object
    createFilmSlot(film) {
        let filmSlot = document.createElement('div');
        let btnContainer = document.createElement('div');
        let deleteBtn = document.createElement('img');
        let filmPoster = document.createElement('img');
        let watchBtn = document.createElement('img')
        let filmTitle = document.createElement('p');
        let filmDirector = document.createElement('p');
        filmTitle.textContent = film.title;
        filmDirector.textContent = film.director;
        filmPoster.src = film.poster;
        filmContainer.appendChild(filmSlot).className = "film-item";
        filmSlot.appendChild(btnContainer).className = "icons";
        filmSlot.appendChild(filmTitle).className = "film-title";
        filmSlot.appendChild(filmPoster).className = "movie-poster";
        btnContainer.appendChild(deleteBtn).id = "delete-film";
        btnContainer.appendChild(watchBtn).id = "watch-film";
        deleteBtn.setAttribute('onclick','this.parentNode.parentNode.remove();')
        watchBtn.src = "imgs/watch.svg";
        deleteBtn.src = "imgs/trash.svg";
        checkPoster()
        watchFilm()
    }
}

function watchFilm() {
    let toggle = true;
    let watchIcons = document.querySelectorAll('#watch-film');
    watchIcons.forEach(watch => {
        watch.addEventListener('click', () => {
            toggle = !toggle;
            if (toggle) {
                watch.src = "imgs/watch.svg";
            } else {
                watch.src = "imgs/watch-seen.svg";
            }
        })
    })
}

watchFilm();

function addFilm() { // Add film to catalog
    let id = Date.now();
    let title = document.getElementById('title').value;
    let director = document.getElementById('director').value;
    let poster = document.getElementById('poster').value;
    const newFilm = new Film(id, title, director, poster);
    const newFilmSlot = new CreateFilm();

    newFilmSlot.createFilmSlot(newFilm);
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

// function demoFilms() {
//     let demo_1 = new Film(Date.now(), "Fight Club", "David Fincher", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg");
//     let demo_2 = new Film(Date.now(), "Toy Story", "John Lasseter", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg");
//     let demo_3 = new Film(Date.now(), "Goodfellas", "Martin Scorsese", "https://www.themoviedb.org/t/p/original/6QMSLvU5ziIL2T6VrkaKzN2YkxK.jpg");
//     let demo_4 = new Film(Date.now(), "The Super Mario Bros. Movie", "John Lasseter", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg");
//     myLibrary.push(demo_1);
//     createFilm();
// }

// demoFilms();

function clearForm() {
    const inputs = document.querySelectorAll(".form-query input");
    inputs.forEach(input => (input.value = ''));
}

saveBtn.addEventListener('click', () => {
    if (title.value === '') {
        return
    } else if (director.value === '') {
        return
    } else {
        addFilm();
        hideModal();
        clearForm();
    }
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