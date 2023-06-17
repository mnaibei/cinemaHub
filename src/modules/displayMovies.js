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

    const viewMoreBtn = movieCard.querySelector('.view-more-btn');
    const detailsContainer = movieCard.querySelector('.details-container');

    const fetchMovieDetails = async (imdbID) => {
      const apiKey = '6d76a8b8';
      const endpoint = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;

      try {
        const response = await fetch(endpoint);
        const details = response.json();
        return details;
      } catch (error) {
        return error;
      }
    };

    // Function to toggle visibility of details container
    function toggleDetailsVisibility(detailsContainer) {
      detailsContainer.style.display = detailsContainer.style.display === 'none' ? 'block' : 'none';
    }

    viewMoreBtn.addEventListener('click', () => {
      if (detailsContainer.innerHTML) {
        // Details already fetched, toggle visibility
        toggleDetailsVisibility(detailsContainer);
      } else {
        // Fetch movie details and display
        fetchMovieDetails(movie.imdbID).then((data) => {
          detailsContainer.innerHTML = `
                <p>Description: ${data.Plot}</p>
                <p>Cast: ${data.Actors}</p>
                <p>Director: ${data.Director}</p>
                
              `;
          toggleDetailsVisibility(detailsContainer);
        });
      }
    });

    resultsContainer.appendChild(movieCard);
  });
};

export default displayMovies;
