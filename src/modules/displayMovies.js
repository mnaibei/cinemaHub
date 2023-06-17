const displayMovies = (movies) => {
  // getting container where data will be displayed
  const resultsContainer = document.getElementById('results');

  // clearing previous loaded data
  resultsContainer.innerHTML = '';

  // if no movies found from query show this message
  if (!movies) {
    resultsContainer.innerHTML = '<p>No movies found.</p>';
    return;
  }

  // loop through data found, create div and append to DOM
  movies.forEach((movie) => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-item');
    movieCard.innerHTML = `
            <img src=${movie.Poster}>
            <div class="movie-info">
            <h3>${movie.Title}</h3>
            <p>${movie.Type}</p>
            <p>${movie.Year}</p>
            </div>
            <button class="view-more-btn">View Details</button>
            <div class="details-container" style="display: none;"></div>
          `;
    resultsContainer.appendChild(movieCard);
  });
};

export default displayMovies;
