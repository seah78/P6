// Global var
const base_url = "http://localhost:8000/api/v1/titles";

// Funcs

function createModal(info) {
   let modal = document.querySelector(".modal");
   let closeBtn = document.querySelector(".close-btn");
   let modalContent = document.querySelector(".modal-content p");
 
   modalContent.innerHTML = `
             <img class="modal-img" src="${info.image_url}" alt="" />
             <p>Titre : ${info.title}<br>
             Genre : ${info.genres}<br>
             Date de sortie : ${info.date_published}</p>
             <p>Vote: ${info.avg_vote} / Score imdb: ${info.imdb_score}</p>
             <p>Réalisateur : ${info.directors}</p>
             <p>Acteurs : ${info.actors}</p>
             <p>Durée : ${info.duration} mn</p>
             <p>Pays : ${info.countries}</p>
             <p>Revenus : ${info.worldwide_gross_income}</p>
             <p>Résumé : ${info.long_description}</p>
         `;
 
   modal.style.display = "block";
 
   closeBtn.onclick = function () {
     modal.style.display = "none";
   };
   window.onclick = function(e) {
     if (e.target == modal) {
       modal.style.display = "none";
     }
   };
 }
 
 async function detailMovie(movieInfo) {
  let getDetailMovieRes = await fetch(`${movieInfo.url}`);
  let getDetailMovieData = await getDetailMovieRes.json();
  return getDetailMovieData;
}

async function bestMovie() {
  let getBestMoviesResponse = await fetch(`${base_url}?sort_by=-imdb_score`);
  let getBestMoviesData = await getBestMoviesResponse.json();

  let bestMovie = document.getElementById("bm_id");

  let getDetailMovieRes = await fetch(
    `${base_url}/${getBestMoviesData.results[0].id}`
  );
  let getDetailMovieData = await getDetailMovieRes.json();

  bestMovie.innerHTML += `
            <img class="modal-img" src="${getBestMoviesData.results[0].image_url}" /><br>
            <button id="btn_modal_bm">Détails</button>
            <h1>${getBestMoviesData.results[0].title}</h1>
            <p>${getDetailMovieData.long_description}</p>
        `;

  document.getElementById("btn_modal_bm").onclick = function () {
    createModal(getDetailMovieData);
  };
}

function createModalButton(selector, imageInfo) {
  selector.innerHTML += `
    <button class="modal-btn" id="${imageInfo.id}">
        <img class="modal-img" src="${imageInfo.image_url}" alt="" />
    </button>
    `;
}

function getMoviesImages(moviesInfo) {
  let images = new Array();

  for (const movie of moviesInfo) {
    images.push(movie.image_url);
  }
  return images;
}

async function carrousel(moviesImages, id) {
  let firstSection = document.querySelector(`#${id} .slider`);

  for (let image of moviesImages) {
    createModalButton(firstSection, image);
  }

  for (let i = 1; i < 8; i++) {
    if (i > 4) {
      firstSection.children[i].setAttribute("class", "notDisplayed");
    }
    let res = await detailMovie(moviesImages[i - 1]);
    firstSection.children[i].onclick = () => createModal(res);
  }
}

function next(arrow) {
  arrow.insertBefore(arrow.children[7], arrow.children[1]);

  arrow.children[1].setAttribute("class", "");

  arrow.children[5].setAttribute("class", "notDisplayed");
}

function previous(arrow) {
  arrow.insertBefore(arrow.children[1], arrow.children[8]);

  arrow.children[4].setAttribute("class", "");

  arrow.children[7].setAttribute("class", "notDisplayed");
}

function addCategoryName(genre, id) {
  let cat = document.querySelector(`#${id} .category_name`);

  if (genre !== "undefined") {
    cat.innerText = `${genre}`;
  } else {
    cat.innerText = `best movies`;
  }
}

async function getData(genre, best_movie = false) {
  let movies = new Array();
  for (let i = 1; movies.length * 5 < 7; i++) {
    if (genre === "undefined") {
      var moviesRes = await fetch(`${base_url}?page=${i}&sort_by=-avg_vote`);
    } else {
      var moviesRes = await fetch(
        `${base_url}?page=${i}&sort_by=-avg_vote&genre=${genre}`
      );
    }
    let moviesData = await moviesRes.json();
    let request = moviesData;

    movies.push(request.results);
  }
  let moviesInfo = movies.flat();
  let carrouselMovies = moviesInfo.slice(3);

  return carrouselMovies;
}

function addArrows(genre, id) {
  let arrow = document.querySelector(`#${id} .slider`);

  arrow.innerHTML =
    `
    <a id="prev_${genre}"><i aria-hidden="true" class="fa fa-arrow-circle-left"></i></a>
    ` +
    arrow.innerHTML +
    `
    <a id="next_${genre}"><i aria-hidden="true" class="fa fa-arrow-circle-right"></i></a>
    `;

  arrow.children[8].onclick = () => next(arrow);

  arrow.children[0].onclick = () => previous(arrow);
}

async function categoryMovies(genre, id) {
  addCategoryName(genre, id);

  let dataMovies = await getData(genre);

  carrousel(dataMovies, id);

  addArrows(genre, id);
}


bestMovie();
categoryMovies("undefined", "most_rated_movies");
categoryMovies("Fantasy", "category_1");
categoryMovies("Sci-Fi", "category_2");
categoryMovies("Comedy", "category_3");


