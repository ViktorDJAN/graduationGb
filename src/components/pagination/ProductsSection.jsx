
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ProductsList from "./ProductsList.jsx";
import ProductDetailed from "./ProductDetailed.jsx";



function ProductsSection() {
    const products = [
        {id: 1,  name: "article_1",   description: "Content of article_1",  price: "100 $"},
        {id: 2,  name: "article_2",   description: "Content of article_2",  price: "200 $"},
        {id: 3,  name: "article_3",   description: "Content of article_3",  price: "300 $"},
        {id: 4,  name: "article_4",   description: "Content of article_4",  price: "400 $"},
        {id: 5,  name: "article_5",   description: "Content of article_5",  price: "500 $"},
        {id: 6,  name: "article_6",   description: "Content of article_6",  price: "600 $"},
        {id: 7,  name: "article_7",   description: "Content of article_7",  price: "700 $"},
        {id: 8,  name: "article_8",   description: "Content of article_8",  price: "800 $"},
        {id: 9,  name: "article_9",   description: "Content of article_9",  price: "900 $"},
        {id: 10, name: "article_10",  description: "Content of article_10", price: "1000 $"},
        {id: 11, name: "article_11",  description: "Content of article_11", price: "1000 $"},
        {id: 12, name: "article_12",  description: "Content of article_12", price: "1000 $"},
        {id: 13, name: "article_13",  description: "Content of article_13", price: "1000 $"},
        {id: 14, name: "article_14",  description: "Content of article_14", price: "1000 $"},
        {id: 15, name: "article_15",  description: "Content of article_15", price: "1000 $"},
        {id: 16, name: "article_16",  description: "Content of article_16", price: "1000 $"},
        {id: 17, name: "article_17",  description: "Content of article_17", price: "1000 $"},
        {id: 18, name: "article_18",  description: "Content of article_18", price: "1000 $"},
        {id: 19, name: "article_19",  description: "Content of article_19", price: "1000 $"},
        {id: 20, name: "article_20",  description: "Content of article_20", price: "1000 $"},

    ];

    return (



            <Routes>
                <Route path={"/list/page/:pageNumber"} element={<ProductsList products={products}/>}/>
                <Route path={"some/product/:productId"} element={<ProductDetailed products={products}/>}/>
                <Route path={"/list/"} element={<ProductsList products={products}/>}/>
            </Routes>





    )
}
export default ProductsSection;