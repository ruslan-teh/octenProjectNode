import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';


import Header from './components/Header/Header';
import {
    AlbumsPage,
    PhotosPage,
    PostCommentsPage,
    PostDetailsPages,
    PostPage,
    UserDetailsPage,
    UserPage,
    UserPostPage
} from "./pages";


const App = () => {


    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Header/>}>

                    <Route index element={<Navigate to={'users'}/>}/>

                    <Route path={'users'} element={<UserPage/>}>

                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={':posts'} element={<UserPostPage/>}/>
                        </Route>

                        <Route path={':id/albums'} element={<AlbumsPage/>}>
                            <Route path={'photos'} element={<PhotosPage/>}/>
                        </Route>
                    </Route>


                    <Route path={'posts'} element={<PostPage/>}>
                        <Route path={':id'} element={<PostDetailsPages/>}>

                            <Route path={':comments'} element={<PostCommentsPage/>}/>

                        </Route>
                    </Route>

                </Route>
            </Routes>
        </div>
    );
};

export default App;