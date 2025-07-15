import React from "react"
import PriceProps from "../models/priceProps"

function Price({price, currency_code}: PriceProps) {

     if (currency_code === 'GBP') {
                 return (
                    <p className="item-price">{price} {currency_code}</p>
                 )
             } else {
                 return (
                    <p className="item-price">{currency_code}{price}</p>
                            
                 )
             }
}
    

export default Price