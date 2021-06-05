import './index.css'
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Content from "./routes/Content";
import Header from "./components/Header";
import Support from './routes/Support';
import ProductDetails from './components/ProductDetails';
import UserDetails from "./routes/UserDetails";
import Login from "./routes/Login";
import Register from "./routes/Register";
import {useEffect, useState} from "react";
import authentication from "./scripts/authentication"
import UserOrders from './routes/UserOrders';
import ChangePassword from "./routes/ChangePassword";
import AddProduct from "./routes/AddProduct";
import Basket from './routes/Basket';
import { storage } from "./firebase";
import ChangeRole from './routes/ChangeRole';

function App() {

    const [loggedUser, setLoggedUser] = useState(null);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        setLoggedUser(authentication.getCurrentUser());
        setUserRole(authentication.getUserRole());
    } );

    return (
      <BrowserRouter>
          <div className="App">
              <Header loggedUser={loggedUser} setLoggedUser={setLoggedUser}/>
              <Navbar loggedUser={loggedUser} userRole={userRole}/>
              <div className="content-container">
                 <Switch>
                     <Route exact path="/">
                        <Content category="all" loggedUser={loggedUser}/>
                     </Route>
                     <Route exact path="/laptops" >
                         <Content category="Laptop" loggedUser={loggedUser}/>
                     </Route>
                     <Route exact path="/phones">
                        <Content category="Telefon" loggedUser={loggedUser}/>
                     </Route>
                     <Route exact path="/tablets">
                        <Content category="Tablet" loggedUser={loggedUser}/>
                     </Route>
                     <Route exact path="/product-details">
                        <ProductDetails loggedUser={loggedUser}/>
                     </Route>

                     <Route
                         exact path="/login"
                         render={(props) => <Login {...props} setLoggedUser={setLoggedUser}/>}
                     >
                     </Route>
                     <Route exact path="/register" component={Register}/>
                     <Route exact path="/add-product" component={AddProduct}/>
                     <Route exact path="/change-role" component={ChangeRole}/>
                     <Route exact path="/help">
                            <Support/>
                     </Route>

                     <Route exact path="/user-profile/user-details">
                         <UserDetails loggedUser={loggedUser}/>
                     </Route>
                     <Route exact path="/cart">
                         <Basket/>
                     </Route>
                     <Route exact path="/user-profile/change-password">
                         <ChangePassword/>
                     </Route>
                     <Route exact path="/user-profile/user-orders">
                         <UserOrders/>
                     </Route>
                 </Switch>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;

