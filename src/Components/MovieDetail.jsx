import React from 'react';

const MovieDetail = ({ movie }) => {
  return (
    <div className="w-full md:w-2/3 text-white pt-6">
      <h1 className="text-6xl font-bold mb-3">{movie.title}</h1>
      <p className="text-xl mt-9 mb-12 leading-relaxed text-white">
        {movie.overview}
      </p>

      <div className="space-y-2 text-white text-xl">
        <p>
          <span className="font-semibold">Release Date:</span>{' '}
          {movie.release_date
            ? new Date(movie.release_date).toDateString()
            : 'N/A'}
        </p>
        <p>
          <span className="font-semibold">Rating:</span>{' '}
          {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
        </p>
        <p>
          <span className="font-semibold">Runtime:</span>{' '}
          {movie.runtime ? `${movie.runtime} mins` : 'N/A'}
        </p>
        <p>
          <span className="font-semibold">Genres:</span>{' '}
          {movie.genres?.map((g) => g.name).join(', ') || 'N/A'}
        </p>
      </div>
    </div>
  );
};

export default MovieDetail;
