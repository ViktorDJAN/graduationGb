
//useParams — это хук в библиотеке React Router, который позволяет извлекать данные из URL и использовать их в компонентах React.
import {useParams} from "react-router-dom";


const ProductDetailed = ({products}) => {

    const {productId} = useParams();
    const product = products.find(product => product.id === parseInt(productId, 10));
    return (
        <div>
            <p>Product detailed</p>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            
            <div><a href="/products">back to products</a></div>
        </div>
    );
}
export default ProductDetailed;

