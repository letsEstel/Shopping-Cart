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
        <div>
          {cart.map((prod, index) => {
            return (
              <div key={index}>
                <div className="productContainer">
                  <ProductDisplay
                    title={prod.title}
                    price={prod.price}
                    description={""}
                    image={prod.image}
                  ></ProductDisplay>
                  <span>{prod.amount}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
