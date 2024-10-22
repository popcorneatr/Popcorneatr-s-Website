import React from "react";
import "./styling/Pokemon.css";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { SearchContext } from "../context/SearchContext";  

function PokemonPage() {
  const [pokeSet, setPokeSet] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);
  const { searchTerm } = useContext(SearchContext);

  const apicall = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://api.pokemontcg.io/v2/cards");
      const data = await res.json();
      setPokeSet(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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

   // Filter the Pokemon set based on the search term
   const filteredPokeSet = pokeSet.filter((post) =>
    post.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <img
        className="pokemon_banner"
        src="https://cdn11.bigcommerce.com/s-lccr685n9n/product_images/uploaded_images/poke-banner.jpg"
        alt="card banner"
      />

      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div className="pokemon_page">
          <div className="pokemon">
            {filteredPokeSet.slice(page * 10 - 10, page * 10).map((post) => {
              return (
                <div className="pokemon_card" key={post.id}>
                  <h2>{post.name}</h2>
                  <img src={post.images.small} alt={post.name + " card"} />
                  <div>
                    <b>Set-Name: </b>
                    {post.set.name}
                  </div>
                  <b>${post.cardmarket?.prices ? post.cardmarket?.prices?.averageSellPrice.toFixed(2) : post.tcgplayer.prices.holofoil.market.toFixed(2)}</b>
                  <div className="button_container">
                    <button onClick={() => addToCart({...post, price: post.cardmarket?.prices ? 
                                                      post.cardmarket?.prices?.averageSellPrice : 
                                                      post.tcgplayer.prices.holofoil.market})}>
                        Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
            {filteredPokeSet.length > 0 && (
              <div className="pagination">
                <span
                  className={page > 1 ? "" : "pagination_disabled"}
                  onClick={() => selectPageHandler(page - 1)}
                >
                  ◀
                </span>
                {[...Array(Math.ceil(filteredPokeSet.length / 10))].map((_, i) => {
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
                    page < Math.ceil(filteredPokeSet.length / 10)
                      ? ""
                      : "pagination_disabled"
                  }
                  onClick={() => selectPageHandler(page + 1)}
                >
                  ▶
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonPage;
