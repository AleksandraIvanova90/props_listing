import React from "react";
import ItemsProps from "../models/ItemsProps"
import productCard from "./ProductCard";

function Listing({ items = [] }: ItemsProps) {
    const productsList = items
    .filter(item => item.state === 'active')
    .map(item => productCard({ item }));

    return (
        <div className="item-list">
            {productsList}
        </div>
  );

}

export default Listing