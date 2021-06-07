import React from "react";
import { Link } from "react-router-dom";

const Product = ({ id, image, name, price, category }) => {
    return (
        <div key={id} className="product">
            <Link to={`/${category}/${id}`}>
                <img src={`/images/${image}`} alt={name} />
                <h3>{name}</h3>
                <p>${price}</p>
            </Link>
        </div>
    );
}

export default Product;