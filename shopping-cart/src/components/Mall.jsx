import { Nav } from "./Nav";
import { FetchProducts } from "./FetchProducts";
import { ProductDisplay } from "./ProductDisplay";
import { useEffect, useState } from "react";
export function Mall() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const temp = async () => {
      const fetchedProduct = await FetchProducts();
      setProducts(fetchedProduct);
      console.log(fetchedProduct);
    };
    temp();
  }, []);
  return (
    <>
      <Nav />
      <h1>Mall</h1>
      {products.map((prod) => {
        return (
          <>
            <ProductDisplay
              title={prod.title}
              price={prod.price}
              description={prod.description}
              image={prod.image}
              key={prod.title}
            ></ProductDisplay>
          </>
        );
      })}
    </>
  );
}
