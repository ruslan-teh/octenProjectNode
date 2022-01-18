import './App.css';


import Users from "./Components/Users/Users";
import {useState} from "react";
import UserDetails from "./Components/UserDetails/UserDetails";
import Posts from "./Components/Posts/Posts";
import {postService} from "./services/post.service";

function App() {
    const [user, setUser] = useState(null);

    const [userId, setUserId] = useState([]);

    const click = (singleUser) => {
        setUser(singleUser)
    }

    const getUserId = (userId) => {
        postService.getAllPost(userId).then(post => setUserId(post))
        setUserId([])
    }



  return (
    <div>
        <div>
            <Users click={click}/>
            <UserDetails user={user} getUserId={getUserId}/>
        </div>
        {userId && <Posts posts={userId}/>}
    </div>
  );
}

export default App;
