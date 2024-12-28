/* eslint-disable react/prop-types */
export function ProductDisplay({ title, price, description, image }) {
  return (
    <>
      <p>{title}</p>
      <p>{price}</p>
      <p>{description}</p>
      <div>
        <img src={image} alt="title" />
      </div>
      <button>Buy</button>
    </>
  );
}
