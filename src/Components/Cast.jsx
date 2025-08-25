import React from 'react';

const Cast = ({ cast }) => {
  return (
    <div className="mt-12 text-center">
      <h2 className="text-3xl font-bold mb-4 text-white">Top Cast</h2>
      <div className="flex justify-center">
        <div className="flex gap-6 overflow-x-auto pb-4">
          {cast.map((actor) => (
            <div
              key={actor.id}
              className="w-50 flex-shrink-0 text-center"
            >
              <div className="w-30 h-30 mx-auto mb-2 rounded-full overflow-hidden flex items-center justify-center bg-gray-800 border-2 border-white shadow-lg">
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                      : `https://placehold.co/300x450/333333/FFFFFF?text=No+Poster+Available`
                  }
                  alt={actor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xl font-semibold truncate text-white">
                {actor.name}
              </p>
              <p className="text-xm text-gray-300 truncate">
                {actor.character}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cast;
