import {Outlet} from 'react-router-dom';

import '../UserPage/UserPage.css'
import Users from '../../components/Users/Users';


const UserPage = () => {

    return (
        <div className={'head'}>
            <div className={'userPage'}>
                <Users/>
            </div>
            <Outlet/>
        </div>
    );


};

export {UserPage};