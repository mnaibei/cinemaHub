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

    const posterUrl = movie.Poster !== 'N/A'
      ? movie.Poster
      : 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1028&q=80';

    movieCard.innerHTML = `
      <img src=${posterUrl} class="movie-img">
        <div class="movie-info">
          <h3 class="title">${movie.Title}</h3>
            <p>type: ${movie.Type}</p>
            <p>year: ${movie.Year}</p>
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
      detailsContainer.style.display = detailsContainer.style.display === 'none' ? 'flex' : 'none';
    }

    viewMoreBtn.addEventListener('click', () => {
      if (detailsContainer.innerHTML) {
        // Details already fetched, toggle visibility
        toggleDetailsVisibility(detailsContainer);
      } else {
        // Fetch movie details and display
        fetchMovieDetails(movie.imdbID).then((data) => {
          detailsContainer.innerHTML = `
          <div class="details-content">
            <div class="close-btn">&times;</div> 
            <div class="content">
            <img src=${posterUrl} class="modal-img">
            <div class="description">
            <h3>${movie.Title}</h3>
            <p>Description: ${data.Plot}</p>
            <p>Cast: ${data.Actors}</p>
            <p>Director: ${data.Director}</p>
            </div>
            </div>
            </div>
          `;
          toggleDetailsVisibility(detailsContainer);

          const closeButton = detailsContainer.querySelector('.close-btn');
          closeButton.addEventListener('click', () => {
            toggleDetailsVisibility(detailsContainer);
          });
        });
      }
    });

    resultsContainer.appendChild(movieCard);
  });
};

export default displayMovies;
