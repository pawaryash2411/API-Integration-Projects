import "../Styles/CryptoHorn.css";
import { Row, Col, Statistic } from "antd";
import millify from "millify";
import { useGetCryptoQuery } from "../Services/CryptoAPI";
import { Spin } from "antd";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import CryptoNews from "../Components/CryptoNews";
import CryptoCurrencies from "../Components/CryptoCurrencies";

const CryptoHorn = () => {
  const { data, isFetching } = useGetCryptoQuery(12);
  const mainData = data?.data?.stats;

  console.log("DATA", data);
  // console.log("isFetching", isFetching);

  if (isFetching === true)
    return (
      <>
        <div className="spinner-icon">
          <Spin size="large" />
        </div>
      </>
    );
  return (
    <>
      <div className="home-container">
        <div className="stats-container">
          <h2 className="home-heading">Global Crypto Stats</h2>
          <hr />
          <Row className="stats-sub-container">
            <Col span={12}>
              <Statistic
                title="Total Cryptocurrencies"
                value={millify(mainData.total)}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Total Exchanges"
                value={millify(mainData.totalExchanges)}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Total Market Cap"
                value={millify(mainData.totalMarketCap)}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Total 24h Volume"
                value={millify(mainData.total24hVolume)}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Total Markets"
                value={millify(mainData.totalMarkets)}
              />
            </Col>
          </Row>
        </div>

        <div className="cryptocurrency-container">
          <div className="cryptocurrency-sub-container">
            <h2 className="cryptocurrency-container-title">
              Top Cryptocurrencies in the world
            </h2>
            <h3>
              <Link
                to={"/crypto-horn/cryptocurrencies"}
                className="cryptocurrency-container-show"
              >
                Show more
                <BsFillArrowRightCircleFill style={{ marginTop: "0.3rem" }} />
              </Link>
            </h3>
          </div>
          <hr />
          <CryptoCurrencies filters={true} />
        </div>

        <div className="cryptocurrency-container">
          <div className="cryptocurrency-sub-container">
            <h2 className="cryptocurrency-container-title">Top Crypto News</h2>
            <h3>
              <Link
                to={"/crypto-horn/news"}
                className="cryptocurrency-container-show"
              >
                Show more
                <BsFillArrowRightCircleFill style={{ marginTop: "0.3rem" }} />
              </Link>
            </h3>
          </div>
          <hr />
          <CryptoNews filters={true} />
        </div>
      </div>
    </>
  );
};

export default CryptoHorn;
