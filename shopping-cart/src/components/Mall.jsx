//MAll.jsx
import { Nav } from "./Nav";
import { FetchProducts } from "./FetchProducts";
import { ProductDisplay } from "./ProductDisplay";
import { useEffect, useState } from "react";
import { addToCart } from "./addToCart";
import { Outlet } from "react-router";
export function Mall() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState(Array(products.length).fill(1));

  useEffect(() => {
    let isMounted = true; // Flag to track if the component is mounted

    const temp = async () => {
      const cachedProducts = localStorage.getItem("products");
      if (cachedProducts) {
        setProducts(JSON.parse(cachedProducts));
      } else {
        const fetchedProducts = await FetchProducts();
        if (isMounted) {
          // Check if the component is still mounted
          setProducts(fetchedProducts);
          localStorage.setItem("products", JSON.stringify(fetchedProducts));
        }
      }
    };

    temp(); // Call the async function

    return () => {
      isMounted = false; // Cleanup function to set the flag to false
    };
  }, []);

  const handleQuantityChange = (index, event) => {
    const newQuantities = [...quantities]; // Create a copy of the current quantities
    newQuantities[index] = Math.max(1, event.target.value); // Update the quantity for the specific product
    setQuantities(newQuantities); // Update the state with the new quantities
  };
  const handleBuyClick = (
    title,
    price,
    image,
    quantity,
    cart,
    setCart,
    index
  ) => {
    if (!quantity) {
      quantity = 1;
    }
    addToCart(title, price, image, quantity, cart, setCart);
    const newquantities = [...quantities];
    newquantities[index] = 1;
    setQuantities(newquantities);
    console.log(cart);
  };
  return (
    <>
      <Nav />
      <Outlet context={{ cart, setCart }} />
      <h1>Mall</h1>
      <div className="productList">
        {products.map((prod, index) => {
          return (
            <div key={index}>
              <div className="productContainer">
                <ProductDisplay
                  title={prod.title}
                  price={prod.price}
                  description={prod.description}
                  image={prod.image}
                ></ProductDisplay>
                <input
                  type="number"
                  value={quantities[index]}
                  min="1"
                  onChange={(event) => handleQuantityChange(index, event)}
                ></input>
                <button
                  onClick={() =>
                    handleBuyClick(
                      prod.title,
                      prod.price,
                      prod.image,
                      quantities[index],
                      cart,
                      setCart,
                      index
                    )
                  }
                >
                  Buy
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
