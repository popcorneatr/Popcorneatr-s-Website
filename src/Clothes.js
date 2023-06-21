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
      selected_page <= Math.ceil(api.length / 8) &&
      selected_page !== page
    ) {
      setPage(selected_page);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      <div className="clothes">
        {api.slice(page * 8 - 8, page * 8).map((post) => {
          return (
            <div className="clothes_container">
              <div key={post.id}>
                <div className="image_container">
                  <img src={post.image} alt="men and women's clothing" />
                </div>
                <div className="description_container">
                  <span className="clothes_title">{post.title}</span>
                  
                  <div className="clothes_price">{"$" + post.price}</div>
                  <p className="clothes_description">{post.description}</p>
                  <button>Add to Cart</button>
                </div>
              </div>
              
            </div>
          );
        })}
      </div>
      {api.length > 0 && (
          <div className="pagination">
            <span
              className={page > 1 ? "" : "pagination_disabled"}
              onClick={() => selectPageHandler(page - 1)}
            >
              ◀
            </span>
            {[...Array(Math.ceil(api.length / 8))].map((_, i) => {
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
                page < Math.ceil(api.length / 8) ? "" : "pagination_disabled"
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
