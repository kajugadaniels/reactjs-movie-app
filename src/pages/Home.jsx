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
          
        </div>
      </div>
    );
}

export default App;
