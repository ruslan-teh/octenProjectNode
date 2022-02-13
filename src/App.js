import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Layout} from "./components";
import {InfoMoviePage, MoviePage} from "./pages";


import css from './App.css'


const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'movie?page=1'}/>}/>
                    <Route path={'movie'} element={<MoviePage/>}/>
                    <Route path={'movie/:id'} element={<InfoMoviePage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;