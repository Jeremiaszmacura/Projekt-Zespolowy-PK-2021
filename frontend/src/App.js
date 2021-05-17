import './index.css'
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Content from "./routes/Content";
import Header from "./components/Header";
import ProductDetails from './components/ProductDetails';

function App() { 
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <Navbar/>
              <div className="content-container">
                 <Switch>
                     <Route exact path="/">
                        <Content category="all"/>
                     </Route>
                     <Route exact path="/laptops">
                        <Content category="Laptop"/>
                     </Route>
                     <Route exact path="/phones">
                        <Content category="Smartfon"/>
                     </Route>
                     <Route exact path="/tablets">
                        <Content category="Tablet"/>
                     </Route>
                     <Route exact path="/product-details">
                        <ProductDetails/>
                     </Route>
                     <Route exact path="/help">
                         {/* Tutaj osobny komponent <Help/>, bo inny calkiem niz <Content/> */}
                     </Route>
                 </Switch>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;

