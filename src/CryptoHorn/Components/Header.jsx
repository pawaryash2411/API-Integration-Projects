import { Menu } from "antd";
import "../Styles/CryptoHorn.css";
import CryptoLogo from "../../Assets/crypto-logo.png";
import { Link } from "react-router-dom";
import { BiExpandHorizontal } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { TiNews } from "react-icons/ti";
import { useState } from "react";

const Header = () => {
  const [isExpanded, SetIsExpanded] = useState(false);
  const toggleSidebar = () => {
    SetIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className="header-container">
        {isExpanded ? (
          <div className="logo-container-collapse">
            <img src={CryptoLogo} alt="crypto" className="logo-collapse" />
          </div>
        ) : (
          <div className="logo-container">
            <img src={CryptoLogo} alt="crypto" className="logo" />
            <h1>
              <Link to={"/crypto-horn"} className="logo-label">
                CryptoHorn
              </Link>
            </h1>
          </div>
        )}
        <hr />
        <div style={{ textAlign: "right" }} onClick={toggleSidebar}>
          <BiExpandHorizontal
            className={!isExpanded ? `header-toggle` : `header-toggle-collapse`}
          />
        </div>
        {!isExpanded ? (
          <>
            <Menu className="header-menu">
              <Menu.Item icon={<HiHome />}>
                <Link to={"/crypto-horn"}>Home</Link>
              </Menu.Item>
              <Menu.Item icon={<BsCurrencyBitcoin />}>
                <Link to={"/crypto-horn/cryptocurrencies"}>
                  Cryptocurrencies
                </Link>
              </Menu.Item>
              <Menu.Item icon={<TiNews />}>
                <Link to={"/crypto-horn/news"}>News</Link>
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <>
            <Menu className="header-menu-collapse">
              <Link to={"/crypto-horn"}>
                <Menu.Item icon={<HiHome />} />
              </Link>
              <Link to={"/crypto-horn/cryptocurrencies"}>
                <Menu.Item icon={<BsCurrencyBitcoin />} />
              </Link>
              <Link to={"/crypto-horn/news"}>
                <Menu.Item icon={<TiNews />} />
              </Link>
            </Menu>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
