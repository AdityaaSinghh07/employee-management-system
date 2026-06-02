import { Link } from
"react-router-dom";

export default function Navbar() {

  return (
    <nav>

      <Link to="/">
        Dashboard
      </Link>

      {" | "}

      <Link to="/employees">
        Employees
      </Link>

      {" | "}

      <Link to="/departments">
        Departments
      </Link>

    </nav>
  );
}
