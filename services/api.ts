const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
import { MovieDetail, PopularResult } from "~/interfaces/apiresults";

export const getTrending = async (): Promise<MovieDetail> => {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${API_KEY}&page=1`
    );
    const json = await response.json();
    return json;
  };
  
  export const getSearchResults = async (query: string): Promise<MovieDetail> => {

    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?language=en-US&api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}`
    );
  
    const data = await response.json();
    // console.log(data);
    return data;
  };
  
  export const getMovieDetails = async (id: number, type: string): Promise<MovieDetail> => {
    // console.log("YO", type);
    // if (type !== "movie"){
    //     type = "tv";
    // }
    // console.log(type);
    const response = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}?language=en-US&api_key=${API_KEY}`
    );
    const data = await response.json();

    return data;
  };