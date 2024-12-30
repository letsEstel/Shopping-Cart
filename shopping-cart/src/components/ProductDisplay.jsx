/* eslint-disable react/prop-types */

import { useState } from "react";

//ProductDisplay.jsx
export function ProductDisplay({ title, price, description, image }) {
  const [display, setDisplay] = useState(false);
  const displayProd = () => {
    setDisplay((prev) => !prev);
  };
  return (
    <>
      <div onClick={displayProd}>
        <h2>{title}</h2>
        <h3>{price}$</h3>
        {display && <p>{description}</p>}
        <div>
          <img src={image} alt={`${title}`} />
        </div>
      </div>
    </>
  );
}
