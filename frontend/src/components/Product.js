import { useHistory } from 'react-router-dom';
import "./Product.css";
import useFetch from "../services/useFetch";

const Product = (props) => {

    const GET_ITEMS_URL = 'http://localhost:4000/products/';

    const {data: products, isLoading, error, reFetch} = useFetch(GET_ITEMS_URL, {});

    const history = useHistory();
    function handleClick(id){
        history.push('/product-details', {params: id})
    }

    return (
            <div>
                {
                    products && (
                        <div className="productContent">
                            {products
                                .filter(p =>
                                    p.price <= props.cena.max
                                    && p.price >= props.cena.min
                                )
                                .filter(p =>
                                    !props.query && true || (p.category + ' ' + p.mark + ' ' + p.name).toLowerCase().includes(props.query.toLowerCase())
                                )
                                .map((e) =>
                                    {
                                        return props.category === e.category || props.category === 'all'  ?
                                            <a className="button" onClick={() => handleClick(e.id)}>
                                                <div className="productCard" key={e.id}>
                                                    <div className="img">
                                                        <img className="medium" src ={e.src} alt="productimg"/>
                                                    </div>
                                                    <div className="info">
                                                        <div className="marka">{e.category} {e.mark}</div>
                                                        <div className="nazwa">{e.name}</div>
                                                        <div className="price">Cena: {e.price}zł</div>
                                                    </div>
                                                </div>
                                            </a>
                                            :
                                            null;
                                    }
                                )}
                        </div>
                    )
                }
            </div>

    );
}
 
export default Product;