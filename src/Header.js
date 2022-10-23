import logo from './logo.svg';

function Header() {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A simple SpaceX API web interface
        </p>
        <ul>
          <li>
            Launches:
          </li>
          <li>
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Upcoming
            </a>
          </li>
          <li>
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next
            </a>
          </li>

          <li>
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Past
            </a>
          </li>

          <li>
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Latest
            </a>
          </li>
        </ul>
      </header>
  );
}

export default Header;
