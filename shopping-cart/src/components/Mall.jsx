import { Nav } from "./Nav";
import { FetchProducts } from "./FetchProducts";
import { ProductDisplay } from "./ProductDisplay";
import { useEffect, useState } from "react";
export function Mall() {
  const [products, setProducts] = useState([]);

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

  return (
    <>
      <Nav />
      <h1>Mall</h1>
      <div className="productList">
        {products.map((prod) => {
          return (
            <>
              <ProductDisplay
                title={prod.title}
                price={prod.price}
                description={prod.description}
                image={prod.image}
              ></ProductDisplay>
            </>
          );
        })}
      </div>
    </>
  );
}
