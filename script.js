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
        let parentFilmSlot = document.createElement('div');
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
        filmContainer.appendChild(parentFilmSlot).className = "film-item-parent";
        parentFilmSlot.appendChild(filmSlot).className = "film-item";
        filmSlot.appendChild(btnContainer).className = "icons";
        filmSlot.appendChild(filmTitle).className = "film-title";
        filmSlot.appendChild(filmPoster).className = "movie-poster";
        btnContainer.appendChild(deleteBtn).id = "delete-film";
        btnContainer.appendChild(watchBtn).id = "watch-film";
        deleteBtn.setAttribute('onclick','this.parentNode.parentNode.parentNode.remove();')
        watchBtn.src = "imgs/watch.svg";
        deleteBtn.src = "imgs/trash.svg";
        let ratingBox = document.createElement('div');
        ratingBox.className = 'rate';
        ratingBox.innerHTML = 
            `<input type="radio" id="${Date.now() + '1'}" name="${Date.now()}"/>
            <label for="${Date.now() + '1'}" title="text">★</label>
            <input type="radio" id="${Date.now() + '2'}" name="${Date.now()}"/>
            <label for="${Date.now() + '2'}" title="text">★</label>
            <input type="radio" id="${Date.now() + '3'}" name="${Date.now()}"/>
            <label for="${Date.now() + '3'}" title="text">★</label>
            <input type="radio" id="${Date.now() + '4'}" name="${Date.now()}"/>
            <label for="${Date.now() + '4'}" title="text">★</label>
            <input type="radio" id="${Date.now() + '5'}" name="${Date.now()}"/>
            <label for="${Date.now() + '5'}" title="text">★</label>`
        parentFilmSlot.appendChild(ratingBox);
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

function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  }
  function onFailure(error) {
    console.log(error);
  }
  function renderButton() {
    gapi.signin2.render('google_signin', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure
    });
  }