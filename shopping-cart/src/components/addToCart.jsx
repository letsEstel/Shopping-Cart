export const addToCart = (title, price, image, amount, cart, setCart) => {
  // Check if the product already exists in the cart
  const productExists = cart.find((product) => product.title === title);

  if (productExists) {
    // If the product exists, update its amount
    const updatedCart = cart.map(
      (product) =>
        product.title === title
          ? {
              title: product.title, // Explicit key-value
              price: product.price,
              image: product.image,
              amount: product.amount + amount, // Update amount
            }
          : product // Keep other products as is
    );
    setCart(updatedCart);
  } else {
    // If the product doesn't exist, add it to the cart
    const newProduct = {
      title: title, // Explicit key-value pairs
      price: price,
      image: image,
      amount: amount,
    };
    setCart([...cart, newProduct]); // Add the new product to the cart
  }
};
