import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './Sidebar.css'

const Sidebar = () => {

    const [valueMin, setValueMin] = useState();
    const [valueMax, setValueMax] = useState();

    return ( 
        <div className="side-bar">
            <div className="info">Filtry</div>
                <h2>Produkty</h2>
                <div className="categories">
                    <Link to="/laptops">Laptopy</Link><br></br>
                    <Link to="/phones">Telefony</Link><br></br>
                    <Link to="/tablets">Tablety</Link><br></br>
                </div>
            <h2>Cena</h2>
            <div className="cena">
                <form>
                    <input 
                        type="text"
                        placeholder="min. cena"
                        value={valueMin}
                        onChange={e => setValueMin(e.target.value)}
                    />
                    <input 
                        type="text"
                        placeholder="max. cena"
                        value={valueMax}
                        onChange={e => setValueMax(e.target.value)}
                    />
                </form>
            </div>
            <button>Pokaż wszystkie filtry</button><br></br>
            <button>Filtruj produkty</button>
        </div>
    );
}
 
export default Sidebar;