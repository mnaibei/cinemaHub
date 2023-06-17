const searchMovies = async (query) => {
  const apiKey = '6d76a8b8';
  const endpoint = 'https://www.omdbapi.com/';

  // search query sent to server
  const url = `${endpoint}?apikey=${apiKey}&s=${query}`;

  // getting results
  try {
    const result = await fetch(url);

    // parse data to json
    const data = await result.json();

    // select data from the search column and return it
    const movieData = data.Search;
    return movieData;
  } catch (error) {
    return error;
  }
};

export default searchMovies;
