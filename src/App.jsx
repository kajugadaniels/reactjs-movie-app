import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { Details, Home, Login, NotFound, Search } from './pages/'

function App() {

    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="search/" element={ <Search /> } />
            <Route path="movie/:id" element={ <Details /> } />
            <Route path="login/" element={ <Login /> } />
            <Route path="*" element={ <NotFound /> } />
        </Routes>
    );
}

export default App;
