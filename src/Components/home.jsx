import React from "react";
import '../CSS/home.css'
import axios from 'axios'

const baseURL = "https://jsonplaceholder.typicode.com/posts";

function Home() {

    const [post, setPost] = React.useState(null)

    React.useEffect(() => {
        axios.get(`${baseURL}/2`).then((response) => {
          setPost(response.data);
          console.log(response.data)
        });
    }, []);

    return <div>
        <h1 className="home">My Home Page</h1>

        <h1>{post.id}</h1>
        <h2>{post.title}</h2>
        <h3>{post.body}</h3>
        
    </div>
}
export default Home