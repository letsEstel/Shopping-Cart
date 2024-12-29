/* eslint-disable react/prop-types */
export function ProductDisplay({ title, price, description, image }) {
  return (
    <>
      <div className="productContainer">
        <h2>{title}</h2>
        <h3>{price}$</h3>
        <p>{description}</p>
        <div>
          <img src={image} alt={`${title}`} />
        </div>
        <label htmlFor={`quantity-${title}`}>Quantity:</label>
        <input type="number" min="1" />
        <button>Buy</button>
      </div>
    </>
  );
}
