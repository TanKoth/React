import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpeg";

function NavBar() {
  return (
    <div className="flex space-x-8 items-center pl-3 py-4">
      <Link to="/">
        <img className="w-[50px]" src={Logo} alt="logo" />
      </Link>
      <div className="text-blue-500 font-bold text-3xl space-x-8">
        <Link to="/">Movies</Link>
        <Link to="/watchlist">WatchList</Link>
      </div>
    </div>
  );
}

export default NavBar;
