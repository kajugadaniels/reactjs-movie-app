import React from 'react';
import { useLocation, Routes, Route } from "react-router-dom";
import { Header } from './components/'
import { images } from './utils/image'
import { Details, Home, Login, NotFound, Search } from './pages/'

function App() {
    const location = useLocation();
    const paths = [
        { path: "/", name: "Home" },
        { path: "explore/", name: "Explore" },
        { path: "genre/", name: "Genre" },
        { path: "news/", name: "News" },
        { path: "movies/", name: "Movies" },
        { path: "tvShow/", name: "TvShows" },
    ];
    const activeness = "font-black text-white";

    return (
        <div className="relative min-h-screen w-full">
            <div className="absolute -z-[2] bg-background w-full min-h-full"></div>
            <img
                className="absolute -z-[1] max-h-[35rem] w-full"
                src={images.topBackground}
                alt=""
            />
            <Header paths={paths} activeness={activeness} location={location} />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="search/" element={ <Search /> } />
                <Route path="movie/:id" element={ <Details /> } />
                <Route path="login/" element={ <Login /> } />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </div>
    );
}

export default App;
