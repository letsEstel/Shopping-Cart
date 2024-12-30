import { Link } from "react-router";
export function Nav() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/Mall">Mall</Link>
      <Link to="/Mall/Cart">Cart</Link>
    </header>
  );
}
