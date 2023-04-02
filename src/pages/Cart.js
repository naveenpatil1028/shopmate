import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
import { useCart } from "../context/CartContext";



export const Cart = () => {
  useTitle("Cart");
  const {total,cartList}= useCart()
  
  const products = cartList;

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {products.length}/$ {total}</h1>
        { products.map((product) => (
          <CartCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
