import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
    return (<nav className="navigation">
        <Link className="navItem">Home</Link>
        <Link className="navItem">About</Link>
        <Link className="navItem">Portfolio</Link>
        <Link className="navItem">Contact</Link>
    </nav>)
}

export default Navigation;