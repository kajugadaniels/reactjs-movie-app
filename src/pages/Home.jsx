import React, { useState, useEffect } from 'react';
import { Hero, Card } from '../components/';
import { images } from '../utils/image'
import fetchNowPlaying from '../api/fetchNowPlaying';

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchNowPlayingData();
    }, []);

    const fetchNowPlayingData = async () => {
        const data = await fetchNowPlaying();
        setMovies(data);
    };

    return (
      <div className="text-bodyText px-8 lg:px-20 h-full">
        <Hero />

        <div className="w-full">
          <div className="w-full flex items-center my-6">
            <div className="text-lg mr-3 inline-flex lg:text-4xl w-full font-bold">
              <span className="flex items-center text-2xl">
                <img src={images.fireIc} alt="" className="h-10 w-16" />
                Trending
              </span>
            </div>
            <div className="inline-flex h-[1px] w-[9999px] bg-linesColor"></div>
            <div className="inline-flex px-12">See&nbsp;More</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-10">
            {movies.map((movie, index) => (
              <Card
                key={movie.id}
                item={movie}
              />
            ))}
          </div>
        </div>
      </div>
    );
}

export default App;
