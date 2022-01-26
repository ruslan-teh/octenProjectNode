import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";


import Header from "./components/Header/Header";
import UserPage from "./pages/UserPage/UserPage";
import PostPage from "./pages/PostPage/PostPage";
import UserDetailsPage from './pages/UserDetailsPages/UserDetailsPage'
import PostDetailsPages from "./pages/PostDetailsPages/PostDetailsPages";
import UserPostPage from "./pages/UserPostPage/UserPostPage";
import CommentsPage from "./pages/PostCommentsPage/CommentsPage";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import PhotosPage from "./pages/PhotosPage/PhotosPage";

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

                            <Route path={':comments'} element={<CommentsPage/>}/>

                        </Route>
                    </Route>

                </Route>
            </Routes>
        </div>
    );
};

export default App;