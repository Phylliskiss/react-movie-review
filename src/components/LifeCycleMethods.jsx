/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";

const images = [
  {
    src: "https://images.unsplash.com/photo-1633353236445-000a4b333663?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z29kZmF0aGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    src: "https://images.unsplash.com/photo-1633353234517-684ac40b0faf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z29kZmF0aGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    src: "https://images.unsplash.com/photo-1633353234404-82a6131f5ae2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdvZGZhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

const LifeCycleMethods = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await axios(
        "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=evUQHLLMG2DdnAk5rQHsMCViqxR4nf1s"
      );

      // console.log(response);
      setMovies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap gap-6">
        {/* // always remember to console.log the data to be able to determine the names for it */}
        {movies.map((movie, index) => {
          return (
            <div key={index} className="border w-[18rem] p-8">
              <img src={images[index % images.length].src} alt="/" />

              <div className="flex flex-col gap-2">
                <p className="py-4 font-bold">Byline: {movie.byline}</p>
                <p>Critic Picks: {movie.critics_pick}</p>
                <p>Title: {movie.display_title}</p>
                <p>Headline: {movie.headline}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LifeCycleMethods;
