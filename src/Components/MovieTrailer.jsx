import { useEffect, useState } from 'react';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

const MovieTrailer = ({ movieId }) => {
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const res = await fetch(
          `${API_BASE_URL}/movie/${movieId}/videos`,
          API_OPTIONS
        );
        const data = await res.json();
        const youtubeTrailer = data.results.find(
          (vid) => vid.type === 'Trailer' && vid.site === 'YouTube'
        );
        setTrailer(youtubeTrailer);
      } catch (error) {
        console.error('Error fetching trailer:', error);
      }
    };

    if (movieId) fetchTrailer();
  }, [movieId]);

  if (!trailer) return <p>No trailer available.</p>;

  return (
    <div className="my-10">
      <h2 className="text-2xl sm:text-3xl text-center font-bold mb-6 text-white">
        {' '}
        Watch Trailer
      </h2>
      <div className="flex justify-center">
        <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-md bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="Movie Trailer"
            className="w-full aspect-video"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default MovieTrailer;
