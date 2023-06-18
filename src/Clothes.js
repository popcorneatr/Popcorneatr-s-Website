import React from "react";
import "./Clothes.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Clothes() {
  const [api, setApi] = useState([]);

  const [page, setPage] = useState(1);
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

  const selectPageHandler = (selected_page) => {
    if (
      selected_page >= 1 &&
      selected_page <= Math.ceil(api.length / 9) &&
      selected_page !== page
    ) {
      setPage(selected_page);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="clothes">
      {api.slice(page * 9 - 9, page * 9).map((post) => {
        return (
          <div key={post.id}>
            <div>
              <h1>{post.title}</h1>
              <h2>{post.category}</h2>
              <p>{"$" + post.price}</p>
              <img src={post.image} alt="men and women's clothing" />
              <p>{post.description}</p>
              <br />
              <hr />
            </div>
          </div>
        );
      })}
      {api.length > 0 && (
        <div className="pagination">
          <span
            className={page > 1 ? "" : "pagination_disabled"}
            onClick={() => selectPageHandler(page - 1)}
          >
            ◀
          </span>
          {[...Array(Math.ceil(api.length / 9))].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "pagination_selected" : ""}
                key={i}
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            className={
              page < Math.ceil(api.length / 9) ? "" : "pagination_disabled"
            }
            onClick={() => selectPageHandler(page + 1)}
          >
            ▶
          </span>
        </div>
      )}
    </div>
  );
}

export default Clothes;
