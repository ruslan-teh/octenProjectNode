import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {usersService} from "../../services/users.service";
import UserPostPage from "../UserPostPage/UserPostPage";


const UserDetailsPage = () => {

    const {id} = useParams();
    const {state} = useLocation();

    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        if (state) {
            setUserDetails(state)
            return
        }
        usersService.getById(id).then(user => setUserDetails({...user}))
    }, [state, id])

    return (
        <div className={'navBtn'}>
            {userDetails && (
                <div><Link to={'posts'} element={<UserPostPage/>} state={userDetails}>{userDetails.name}</Link></div>)}
            <Outlet/>
        </div>
    );
};

export default UserDetailsPage;