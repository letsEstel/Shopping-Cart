/* eslint-disable react/prop-types */
//ProductDisplay.jsx
export function ProductDisplay({ title, price, description, image }) {
  return (
    <>
      <div>
        <h2>{title}</h2>
        <h3>{price}$</h3>
        <p>{description}</p>
        <div>
          <img src={image} alt={`${title}`} />
        </div>
        <label htmlFor={`quantity-${title}`}>Quantity:</label>
      </div>
    </>
  );
}
