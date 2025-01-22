import {useParams} from "react-router-dom";

import Pagination from "./Pagination.jsx";
import React from "react";
import ProductCell from "./ProductCell.jsx";


// in here i pass properties namely array with products
const ProductsList = ({products})=> {
    const {pageNumber} = useParams();

    const currentPage = pageNumber ? parseInt(pageNumber, 10) : 1;
    const productsPerPage = 3;
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

    return (
        <div>
            <h1>Product List</h1>
            {currentProducts.map((product, ind) => (
                <ProductCell key={ind} product={product} /> ))}

            <Pagination totalProducts={products.length}
                        productsPerPage={productsPerPage}
                        currentPage={currentPage}/>
        </div>
    )
}

export default ProductsList;