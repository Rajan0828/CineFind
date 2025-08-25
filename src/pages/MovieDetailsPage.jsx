import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import HomeButton from '../Components/HomeButton';
import MovieDetail from '../Components/MovieDetail';
import Cast from '../Components/Cast';
import Recommendations from '../Components/Recommendations';
import Poster from '../Components/Poster';
import MovieTrailer from '../Components/MovieTrailer';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const headers = {
          accept: 'application/json',
          Authorization: `Bearer ${
            import.meta.env.VITE_TMDB_API_KEY
          }`,
        };

        const movieRes = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          { headers }
        );
        const movieData = await movieRes.json();
        setMovie(movieData);

        const castRes = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
          { headers }
        );
        const castData = await castRes.json();
        setCast(castData.cast.slice(0, 5));

        const recRes = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US`,
          { headers }
        );
        const recData = await recRes.json();
        setRecommendations(recData.results.slice(0, 6));
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovieData();
  }, [id]);

  if (!movie) return <p className="text-center mt-10">Loading...</p>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="max-w-6xl mx-auto p-6"
    >
      <HomeButton />

      <div className="flex flex-col md:flex-row gap-8">
        <Poster movie={movie} />
        <MovieDetail movie={movie} />
      </div>

      <MovieTrailer movieId={id} />

      <Cast cast={cast} />

      <Recommendations recommendations={recommendations} />
    </motion.div>
  );
};

export default MovieDetailsPage;
