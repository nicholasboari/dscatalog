import { ReactComponent as MainImage } from "assets/images/main-image.svg";
import ButtonIcon from "components/ButtonIcon/index";
import Navbar from "components/Navbar/index";
import { Link } from "react-router-dom";

import "./styles.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="base-card home-card">
          <div className="home-content-container">
            <h1>Conheça o melhor catálogo de produtos</h1>
            <p>
              Ajudaremos você a encontrar os melhores produtos disponíveis no
              mercado.
            </p>
            <div>
              <Link to="/products">
                <ButtonIcon text="Inicie agora a sua busca." />
              </Link>
            </div>
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
