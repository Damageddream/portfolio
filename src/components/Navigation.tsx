import { Link } from "react-router-dom";
import "../assets/styles/navigation.css"

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <Link to="/" className="navItem">
        Home
      </Link>
      <Link to="/about" className="navItem">
        About
      </Link>
      <Link to="/portfolio" className="navItem">
        Portfolio
      </Link>
      <Link to="/skills" className="navItem">
        Contact
      </Link>
      <Link to="/contact" className="navItem">
        Contact
      </Link>
    </nav>
  );
};

export default Navigation;
