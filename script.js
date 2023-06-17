const apiKey = "db0c3c63";
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const resultsContainer = document.getElementById("results-container");

searchButton.addEventListener("click", searchMovies);

async function searchMovies() {
  const searchTerm = searchInput.value;

  if (searchTerm.trim() === "") {
    return;
  }

  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`
    );
    const data = await response.json();

    if (data.Response === "True") {
      displayMovies(data.Search);
    } else {
      displayErrorMessage(data.Error);
    }
  } catch (error) {
    displayErrorMessage("An error occurred. Please try again later.");
  }
}

function displayMovies(movies) {
  resultsContainer.innerHTML = "";

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    const movieTitle = document.createElement("h2");
    movieTitle.textContent = movie.Title;

    const moviePoster = document.createElement("img");
    moviePoster.src = movie.Poster;
    moviePoster.alt = movie.Title;

    const movieYear = document.createElement("p");
    movieYear.textContent = movie.Year;

    const viewDetailsButton = document.createElement("button");
    viewDetailsButton.textContent = "View Details";
    viewDetailsButton.addEventListener("click", async () => {
      const detailsContainer = document.createElement("div");
      detailsContainer.classList.add("movie-details");

      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`
        );
        const data = await response.json();

        if (data.Response === "True") {
          const details = `
            <p>${data.Plot}</p>
            <p><strong>Genre:</strong> ${data.Genre}</p>
            <p><strong>Cast:</strong> ${data.Actors}</p>
            <p><strong>Director:</strong> ${data.Director}</p>
            <p><strong>Released:</strong> ${data.Released}</p>
            <p><strong>Released:</strong> ${data.Ratings.Value}</p>
          `;
          detailsContainer.innerHTML = details;
        } else {
          displayErrorMessage(data.Error);
        }
      } catch (error) {
        displayErrorMessage("An error occurred. Please try again later.");
      }

      if (movieCard.contains(detailsContainer)) {
        movieCard.removeChild(detailsContainer);
      } else {
        movieCard.appendChild(detailsContainer);
      }
    });

    movieCard.appendChild(movieTitle);
    movieCard.appendChild(moviePoster);
    movieCard.appendChild(movieYear);
    movieCard.appendChild(viewDetailsButton);

    resultsContainer.appendChild(movieCard);
  });
}

function displayErrorMessage(message) {
  resultsContainer.innerHTML = `<p class="error-message">${message}</p>`;
}
