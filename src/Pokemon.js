import React from "react";
import "./Pokemon.css";
import { useState, useEffect } from "react";

function Clothes() {
  const [pokeSet, setPokeSet] = useState([]);

  const [page, setPage] = useState(1);
  const apicall = async () => {
    try {
      const res = await fetch("https://api.pokemontcg.io/v2/cards");
      const data = await res.json();
      setPokeSet(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const selectPageHandler = (selected_page) => {
    if (
      selected_page >= 1 &&
      selected_page <= Math.ceil(pokeSet.length / 10) &&
      selected_page !== page
    ) {
      setPage(selected_page);
    }
  };

  useEffect(() => {
    apicall();
  }, []);

  return (
    <div>
      <img
        className="pokemon_banner"
        src="https://cdn11.bigcommerce.com/s-lccr685n9n/product_images/uploaded_images/poke-banner.jpg"
        alt="card banner"
      />

      <div className="pokemon">
        {pokeSet.slice(page * 10 - 10, page * 10).map((post) => {
          return (
            <div className="pokemon_card">
              <div key={post.id}>
                <h2>{post.name}</h2>
                <img src={post.images.small} alt="pokemon card" />
                <div>
                  <b>Set-Name: </b>
                  {post.set.name}
                </div>
              </div>
              <div className="button_container">
                <button>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
      {pokeSet.length > 0 && (
        <div className="pagination">
          <span
            className={page > 1 ? "" : "pagination_disabled"}
            onClick={() => selectPageHandler(page - 1)}
          >
            ◀
          </span>
          {[...Array(Math.ceil(pokeSet.length / 10))].map((_, i) => {
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
              page < Math.ceil(pokeSet.length / 10) ? "" : "pagination_disabled"
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
