import React from "react";

import ProductCardProps from "../models/productCardProps";
import Price from "./Price";
import title from "./title"

function productCard({item}: ProductCardProps) {
    return(
        <div className="item" key={item.listing_id}>
            <div className="item-image">
                        <a href={item.url}>
                        <img src={item.MainImage.url_570xN} />
                        </a>
            </div>
            <div className="item-details">
                <p className="item-title">{title(item)}</p>
                <Price price={item.price} currency_code={item.currency_code} />
                <p className="item-quantity level-medium">12 left</p>
        </div>
    </div>
    )
}

export default productCard