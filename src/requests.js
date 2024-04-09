import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Authorization"] =
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDA1NDY1M2U0MzEwNjJmMmFmMzJmNTA1ZWVjOGFjNiIsInN1YiI6IjY2MTFjZTI3YzY4YjY5MDE3ZDA0YzM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ar8LpmeT3ETC6yg6FhFJJa8Mdd1ccV7vmSfDJBWAr_U";

export async function filmListRequest() {
  const response = await axios("/trending/movie/day");
  return response.data.results;
}

export async function movieInfoRequest(movieId) {
  const resp = await axios(`/movie/${movieId}`);
  return resp.data;
}

export async function creditsRequest(movieId) {
  const resp = await axios(`/movie/${movieId}/credits`);
  return resp.data.cast.filter(
    (actor) => actor.profile_path && actor.character
  );
}

export async function reviewsRequest(movieId) {
  const resp = await axios(`/movie/${movieId}/reviews`);
  return resp.data.results;
}

export async function searchRequest(title) {
  const options = {
    params: { query: title, page: 1, include_adult: false, languag: "en" },
  };
  const resp = await axios(`/search/movie`, options);
  return resp.data.results;
}