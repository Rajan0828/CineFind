import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const {
    title,
    vote_average,
    poster_path,
    release_date,
    original_language,
    id,
  } = movie;

  return (
    <Link
      to={`/movie/${id}`}
      className="group relative block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
    >
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : '/no-movie.png'
        }
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
      />

      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
        <h3 className="text-white font-semibold text-xm truncate">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-xm text-gray-300 mt-1">
          <div className="flex items-center gap-1">
            <img src="/star.svg" alt="Star" className="w-4 h-4" />
            <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
          </div>
          <span>•</span>

          <p>{original_language.toUpperCase()}</p>
          <span>•</span>

          <p>
            {release_date
              ? new Date(release_date).getFullYear()
              : 'N/A'}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
