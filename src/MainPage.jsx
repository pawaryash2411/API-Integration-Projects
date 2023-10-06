import "./App.css";
import Travel from "./Assets/Travel.gif";
import Crypto from "./Assets/crypto.gif";
import RealState from "./Assets/realState.gif";
import Google from "./Assets/google.gif";
import Question from "./Assets/question.gif";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <div className="main_container">
        <div className="api_heading">
          <h1>API PROJECTS</h1>
        </div>

        <div className="card_container_main">
          <Link to={"/travel-guide"} style={{ textDecoration: "none" }}>
            <div className="card_container" title="Tap to View">
              <div>
                <img src={Travel} className="card_img" />
              </div>
              <label>Travel Guide Project</label>
              <span>
                Travel Guide is a Project which guides you for travel advisor,
                hotels and restaurants of your choice.
              </span>
            </div>
          </Link>

          <Link to={"/crypto-horn"} style={{ textDecoration: "none" }}>
            <div className="card_container" title="Tap to View">
              <div>
                <img src={Crypto} className="card_img" />
              </div>
              <label>Crypto Horn Project</label>
              <span>
                Crypto Horn Project gives you latest news about the
                Cryptocurrency, Market and Prices.
              </span>
            </div>
          </Link>

          <div className="card_container" title="Tap to View">
            <div>
              <img src={RealState} className="card_img" />
            </div>
            <label>Real State Project</label>
            <span>
              Real State Project gives Real state and Property information and
              advisory.
            </span>
          </div>

          <div className="card_container" title="Tap to View">
            <div>
              <img src={Google} className="card_img" />
            </div>
            <label>Google Clone Project</label>
            <span>
              Google Clone Project gives search functionality like Real Google
              search engine system.
            </span>
          </div>

          <div className="card_container" title="Tap to View">
            <div>
              <img src={Question} className="card_img" />
            </div>
            <label>Upcoming Projects??</label>
            <span>
              Some Projects are coming to your way please wait We will Update
              you soon.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
