import {Headers} from "../Headers/Headers";
import {Outlet} from "react-router-dom";

const Layout = () => {

    return (
        <div>
            <Headers/>
            <Outlet/>
        </div>
    );
};

export {Layout};