import './styles.css';
import searchMovies from './modules/searchMovies.js';
import displayMovies from './modules/displayMovies.js';

// fetch DOM elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsContainer = document.getElementById('results');

const searchMoviesHandler = async () => {
  // getting user query
  const query = document.getElementById('searchInput').value;
  try {
    // sending query to searchMovies function
    const movies = await searchMovies(query);

    // sending result to displayMovies function
    displayMovies(movies);
    document.getElementById('searchInput').value = ''; // Clearing the input field
  } catch (error) {
    resultsContainer.innerHTML = 'oops something went wrong! please refresh';
  }
};

// search box functionality so user can also press enter and submit query
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    searchMoviesHandler();
  }
});

// search button functionality, calls the searchMoviesHandler when clicked
searchButton.addEventListener('click', searchMoviesHandler);
