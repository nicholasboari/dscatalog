import Admin from "pages/Admin/index";
import Catalog from "pages/Catalog/index";
import Home from "pages/Home/index";
import ProductDetails from "pages/ProductDetails/index";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";

const Routes = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Catalog />}></Route>
        <Route path="/products/:productId" element={<ProductDetails />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
