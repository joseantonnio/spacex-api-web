import logo from '../assets/logo.svg';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        A simple SpaceX API web interface
      </p>
      <ul>
        <li>
          <Link to="/upcoming">Upcoming Launch</Link>
        </li>
        <li>
          <Link to="/next">Next Launches</Link>
        </li>

        <li>
          <Link to="/past">Past Launches</Link>
        </li>

        <li>
          <Link to="/latest">Latest Launch</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
