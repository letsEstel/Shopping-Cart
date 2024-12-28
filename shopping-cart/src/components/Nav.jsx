import { Link } from "react-router";

export function Nav() {
  return (
    <>
      <Link to="/">Home</Link>
      <div></div>
      <Link to="/Mall">Mall</Link>
      <div></div>
      <Link to="/Cart">Cart</Link>
    </>
  );
}
