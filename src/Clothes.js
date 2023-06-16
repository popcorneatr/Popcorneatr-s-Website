import React from "react";
import "./Clothes.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Clothes() {
  const [api, setApi] = useState([]);
  const callApi = async () => {
    try {
      const res = await axios
        .get("https://fakestoreapi.com/products")
        .then((res) => res);
      console.log(res.data);
      setApi(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="clothes">
      {api.map((post) => {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <h2>{post.category}</h2>
            <p>{"$" + post.price}</p>
            <img src={post.image} alt="men and women's clothing" />
            <p>{post.description}</p>
            <br />
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Clothes;
