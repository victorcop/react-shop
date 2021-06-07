import React from "react";

const Product = ({ id, image, name, price }) => {
    return (
        <div key={id} className="product">
            <a href="/">
                <img src={`/images/${image}`} alt={name} />
                <h3>{name}</h3>
                <p>${price}</p>
            </a>
        </div>
    );
}

export default Product;