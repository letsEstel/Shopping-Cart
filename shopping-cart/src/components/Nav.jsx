import { Link } from "react-router";
export function Nav() {
  return (
    <header>
      <p>Shopping Cart</p>
      <div className="linkList">
        <Link to="/">Home</Link>
        <Link to="/Mall">Mall</Link>
        <Link to="/Mall/Cart">Cart</Link>
      </div>
    </header>
  );
}
