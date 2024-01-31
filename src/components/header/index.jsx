import "./index.css";
import logo from "../../assets/Vector.png";
import logo1 from "../../assets/savat.png";
export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#" className="item-link">
                  Furniture
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="item-link">
                  why Feather
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="item-link">
                  Feather for Business
                </a>
              </li>
            </ul>
          </nav>
          <a href="#" className="header-img-link">
            <img className="img" src={logo} alt="logo" width={116} height={26}/>
          </a>
          <div className="header-box">
            <nav className="navbar">
              <ul className="nav-list">
                <li className="nav-item">
                  <a href="#" className="item-link">
                    Check if We Deliver
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="item-link">
                    why Feather
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="item-link">
                    Search
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="item-link">
                    Account
                  </a>
                </li>
              </ul>
            </nav>
            <a href="#" className="nav-link">
              <img src={logo1} alt="logo" className="nav-img" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
