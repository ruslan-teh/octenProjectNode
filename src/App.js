import './App.css';


import Users from "./Components/Users/Users";
import {useState} from "react";
import UserDetails from "./Components/UserDetails/UserDetails";
import Posts from "./Components/Posts/Posts";
import {postService} from "./services/post.service";

function App() {
    const [user, setUser] = useState(null);

    const [posts, setPosts] = useState([]);

    const click = (singleUser) => {
        setUser(singleUser)
    }

    const getUserId = (userId) => {
        postService.getAllPost(userId).then(post => setPosts(post))
    }



  return (
    <div>
        <div>
            <Users click={click}/>
            {user && <UserDetails user={user} getUserId={getUserId}/>}
        </div>
        {posts && <Posts posts={posts}/>}
    </div>
  );
}

export default App;
