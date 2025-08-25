import React from 'react';

const Poster = ({ movie }) => {
  return (
    <div className="w-full md:w-1/3 flex justify-center pt-6">
      <div className="relative">
        {movie.release_date && (
          <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 text-xs rounded-md shadow-md">
            {new Date(movie.release_date).getFullYear()}
          </div>
        )}
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : '/no-movie.png'
          }
          alt={movie.title}
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Poster;
