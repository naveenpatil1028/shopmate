import "./ProductCard.css";
import { useCart } from './../context/CartContext';
import { useEffect, useState } from "react";


export const ProductCard = ({product}) => {
  const {name, price, image} = product;
  const {addToCart,cartList,removeFromCart}=useCart()
  const [isInCart, setIsInCart] = useState(false)

  const handleAdd=()=>{
    addToCart(product)
    console.log(cartList);
  }

  useEffect(() => {
    const productIsInCart=cartList.find(cartItem=>cartItem.id===product.id)
    if(productIsInCart){
      setIsInCart(true)
    }else{
      setIsInCart(false)
    }
  }, [cartList,product.id])
  
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart?(<button className="remove" onClick={()=>removeFromCart(product)}>Remove</button>):(<button onClick={handleAdd}>Add to Cart</button>)}
      </div>
    </div>
  )
}
