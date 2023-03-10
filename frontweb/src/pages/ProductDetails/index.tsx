import { ReactComponent as ArrowIcon } from "assets/images/arrow.svg";
import Navbar from "components/Navbar";

import ProductPrice from "components/ProductPrice/index";
import { Link } from "react-router-dom";

import "./styles.css";

const ProductDetails = () => {
  return (
    <>
      <Navbar />
      <div className="product-details-container">
        <div className="product-details-card base-card">
          <Link to="/products">
            <div className="goback-container">
              <ArrowIcon />
              <h2>VOLTAR</h2>
            </div>
          </Link>
          <div className="row">
            <div className="col-xl-6">
              <div className="image-container">
                <img
                  src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg"
                  alt="nome produto"
                />
              </div>
              <div className="name-price-container">
                <h1>Computador Ryzen 5 5600x RTX 2080ti</h1>
                <ProductPrice price={234.54} />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="description-container">
                <h2>Descrição do produto!</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora iusto quas debitis architecto similique? Corrupti
                  fugiat neque esse, dolor qui temporibus et in iure dolorem
                  aspernatur, corporis sint nihil ut earum, necessitatibus quasi
                  debitis ea. Voluptatibus natus perspiciatis vitae similique
                  error. Sapiente quod dicta ipsum cumque unde assumenda
                  molestias!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
