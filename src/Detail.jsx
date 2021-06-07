import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./services/useFetch";
import Spinner from "./Spinner";
import PageNotFound from "./PageNotFound";

const Detail = ({ addToCard, updateQuantity }) => {
    const [sku, setSku] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: product, loading, error } = useFetch(`products/${id}`);

    if (loading) return <Spinner />;
    if (!product) return <PageNotFound />;
    if (error) throw error;

    return (
        <div id="detail">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p id="price">${product.price}</p>
            <select
                id="size"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
            >
                <option value="">What size?</option>
                {product.skus.map(s => (
                    <option key={s.sku} value={s.sku}>
                        {s.size}
                    </option>
                ))}
            </select>
            <p>
                <button disabled={!sku} className="btn btn-primary"
                    onClick={() => {
                        addToCard(id, sku);
                        navigate("/cart")
                    }}>
                    Add to cart
                </button>
            </p>
            <img src={`/images/${product.image}`} alt={product.category} />
        </div>
    );
}

export default Detail;
