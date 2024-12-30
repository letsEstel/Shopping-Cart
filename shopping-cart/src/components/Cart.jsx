//Cart.jsx
import { useOutletContext } from "react-router";
import { Nav } from "./Nav";
import { ProductDisplay } from "./ProductDisplay";
import { useState } from "react";
export function Cart() {
  const { cart, setCart } = useOutletContext(); // Destructure cart from context
  const [isVisible, setIsVisible] = useState(false); // State to manage visibility

  const toggleSpan = () => {
    setIsVisible((prev) => !prev); // Toggle the visibility state
  };
  const deleteProduct = (title) => {
    let newCart = cart;
    newCart = newCart.filter((prod) => prod.title != title);
    setCart(newCart);
  };
  const buyAll = () => {
    setCart([]);
  };
  return (
    <>
      <Nav />
      <h1>Cart</h1>
      <p className="cartStatusBar" onClick={toggleSpan}>
        {cart.length > 0
          ? `${cart
              .reduce(
                (total, product) => total + product.price * product.amount,
                0
              )
              .toFixed(2)}$ (${cart.reduce(
              (total, product) => total + product.amount,
              0
            )})`
          : "Your cart is empty."}
      </p>
      {isVisible && (
        <div className="cartContainer">
          {cart.map((prod) => {
            return (
              <div key={prod.title}>
                <div className="productContainer">
                  <ProductDisplay
                    title={prod.title}
                    price={prod.price * prod.amount}
                    description={""}
                    image={prod.image}
                  ></ProductDisplay>
                  <div>{prod.amount}</div>
                  <button
                    onClick={() => {
                      deleteProduct(prod.title);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
          <button onClick={buyAll}>一键清空</button>
        </div>
      )}
    </>
  );
}
