//get an api key from https://www.themoviedb.org and enter it below,it's completey free!

const apiKey = "api_key_goes_here";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${apiKey}&languages=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${apiKey}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${apiKey}&languages=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
    fetchHorrorMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${apiKey}&with_genres=99`,
}

export default requests;
export { apiKey };