import './index.css'
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Switch, useLocation} from "react-router-dom";
import Content from "./routes/Content";
import Header from "./components/Header";
import ProductDetails from './components/ProductDetails';
import UserDetails from "./routes/UserDetails";



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
                     <Route exact path="/user-profile/user-details">
                         <UserDetails/>
                     </Route>
                     <Route exact path="/user-profile/user-orders">

                     </Route>
                 </Switch>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;

