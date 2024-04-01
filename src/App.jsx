import React, { useState, useEffect } from 'react';
import { Header, Hero, Card } from './components';
import fetchNowPlaying from './api/fetchNowPlaying'; // Import fetchNowPlaying from the api folder
import axios from 'axios';

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
        <div className='bg-black px-10'>
            <Header />
            <Hero />
            <div className='container py-8'>
                <div className='flex flex-wrap gap-4'>
                    {movies.map((movie, index) => (
                        <Card
                            key={index}
                            title={movie.original_title}
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            price={movie.vote_average}
                            vote={movie.vote_average}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
