import {Link} from "react-router-dom";

function ProductCell({product}){
    return(
        <div>
            <p>Product </p>
            <h2><Link to={`/some/product/${product[`id`]}`}>{product[`name`]} </Link></h2>
            <p>{product[`description`]}</p>
            <p>{product[`price`]}</p>
        </div>
    );
}
export default ProductCell;