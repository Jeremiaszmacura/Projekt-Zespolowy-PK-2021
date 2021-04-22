import './index.css'
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Content from "./routes/Content";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Navbar/>
              <div className="content-container">
                 <Switch>
                     <Route exact path="/">
                        <Content category="all"/>
                     </Route>
                     <Route exact path="/laptops">
                         <Content category="laptops"/>
                     </Route>
                     <Route exact path="/phones">
                         <Content category="phones"/>
                     </Route>
                     <Route exact path="/tablets">
                         <Content category="tablets"/>
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

