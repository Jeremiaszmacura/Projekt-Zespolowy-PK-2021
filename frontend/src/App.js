import './index.css'
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Content from "./routes/Content";
import Header from "./components/Header";
import Support from './components/Support';
import ProductDetails from './components/ProductDetails';
import UserDetails from "./routes/UserDetails";
import Login from "./routes/Login";
import Register from "./routes/Register";


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
                     <Route exact path="/login" component={Login}/>
                     <Route exact path="/register" component={Register}/>
                     <Route exact path="/help">
                            <Support/>
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

