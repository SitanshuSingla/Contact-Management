import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link class="navbar-brand" to="/">
          Contact Management App
        </Link>
      </div>
    </nav>
  );
}
