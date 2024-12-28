export function FetchProducts() {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
}
