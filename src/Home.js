import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images.squarespace-cdn.com/content/v1/55ef0e29e4b099e22cdc9eea/1575525543204-8QEQNTIOPY9XKVK6LT9K/yugioh+banner.png"
          alt="card banner"
        />

        <div className="home_row">
          <Product
            id={"6465786"}
            title={"Infernity Archfiend"}
            image={
              "https://i.ebayimg.com/images/g/Q54AAOSwxetjcy8V/s-l1600.jpg"
            }
            price={7.99}
            rating={5}
          />
          <Product
            id={"7989009"}
            title={"Phantom Knights of Torn Scale"}
            image={
              "https://i.ebayimg.com/images/g/0uQAAOSw6tdgBPhh/s-l1600.jpg"
            }
            price={2.99}
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id={"7686794"}
            title={"Odin Father of the Aesir"}
            image={
              "https://d1w8cc2yygc27j.cloudfront.net/6317503464403644497/7483953661617645687.jpg"
            }
            price={250.99}
            rating={3}
          />
          <Product
            id={"8979877"}
            title={"Dark Magician Girl"}
            image={
              "https://i.ebayimg.com/images/g/v0gAAOSwmjVjkmaa/s-l1600.jpg"
            }
            price={150.98}
            rating={5}
          />
          <Product
            id={"0987656"}
            title={"Apollousa Bow of the Goddess"}
            image={
              "https://cdn.shopify.com/s/files/1/0510/1584/3995/products/IMG_8898_800x.jpg?v=1614758048"
            }
            price={999.99}
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id={"1234567"}
            title={"Sky Striker Ace Kagari"}
            image={
              "https://i.ebayimg.com/images/g/zxIAAOSwsg9jxKDJ/s-l1600.jpg"
            }
            price={158.99}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
