import React from 'react';
import { Link } from 'react-router-dom';

const Recommendations = ({ recommendations }) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-violet-600">
        Recommended Movies
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {recommendations.map((rec) => (
          <Link
            key={rec.id}
            to={`/movie/${rec.id}`}
            className="group relative block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={
                rec.poster_path
                  ? `https://image.tmdb.org/t/p/w300${rec.poster_path}`
                  : '/no-movie.png'
              }
              alt={rec.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-3">
              <p className="text-white font-semibold text-sm truncate">
                {rec.title}
              </p>
              {rec.release_date && (
                <p className="text-violet-300 text-xs">
                  {new Date(rec.release_date).getFullYear()}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
