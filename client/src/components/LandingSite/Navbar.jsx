import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

  const mobileMenuStyles = "flex-col absolute top-0 left-0 w-full h-full bg-gray px-10 bg-black py-40 text-5xl font-bold";

  return (
    <nav className="flex align-center justify-between p-10 text-white md:px-20">
      <Link to="/" className="flex z-10 md:py-3 font-bold text-xl">
        
        <FontAwesomeIcon icon={faHouse} size="lg" />
      </Link>
      <div
        className="flex gap-10 md:flex"
      >
        <Link
          to="/about"
          className="md:py-3 md:hover:text-blue-500 transition-all ease-linear"
        >
          About
        </Link>
        <Link
          to="/auth/admin-login"
          className="bg-blue-500 py-3 px-5 hover:bg-blue-700 transition rounded text-xl"
        >
          AdminLogin
        </Link>
      </div>
    </nav>
  );
}
export { Navbar };