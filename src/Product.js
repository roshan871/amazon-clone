import React from 'react'
import "./Product.css"
import { useStateValue } from "./StateProvider"

function Product({ id,title, image, price, rating}) {
  // eslint-disable-next-line
    const [{basket}, dispatch] = useStateValue();
  
    const addToBasket = () => {
      // dispatch the item into the data layer
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
          key: id,
        },
      });
    };
    return (
        <div className="product">
         <div className="product-info">
             <p>{title}</p>
             <p className="product-price">
                 <small>$</small>
                 <strong>{price}</strong>
             </p>
              <div className="product-rating" key={title.id}>
              {Array(rating)
              .fill()
              .map((_,i) =>(
                <p>⭐</p>
              ))}
             </div>
             <img className="product-image" src={image} alt="image1"/>
             <button  className="product-button" onClick={addToBasket}>Add to Basket</button>
         </div>
        </div>
    )
}

export default Product
