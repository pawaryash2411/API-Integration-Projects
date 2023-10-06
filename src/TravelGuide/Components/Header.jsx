import "../Styles/TravelGuide.css";
import { FcSearch } from "react-icons/fc";

const Header = () => {
  return (
    <>
      <div className="header">
        <h1 href="#" className="logo">
          Travel Guide
        </h1>
        <div className="mean-toggle"></div>
        <nav>
          <div>
            <input
              type="text"
              placeholder="Search...."
              className="header-input"
            />
            <FcSearch
              style={{
                position: "relative",
                right: "2.5rem",
                top: ".5rem",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            />
          </div>
        </nav>
        <div className="clear"></div>
      </div>
    </>
  );
};

export default Header;
