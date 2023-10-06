import { useEffect, useState } from "react";
import { useGetCryptoQuery } from "../Services/CryptoAPI";
import "../Styles/CryptoHorn.css";
import { Spin, Card, Row, Col, Input } from "antd";
import { Link } from "react-router-dom";
import millify from "millify";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { GrMoney } from "react-icons/gr";

const CryptoCurrencies = ({ filters }) => {
  const count = filters ? 12 : 100;
  const { data, isFetching } = useGetCryptoQuery(count);
  const cryptoList = data?.data?.coins;
  const [cryptos, setCryptos] = useState([]);
  const [search, setSearch] = useState("");

  console.log(data);
  useEffect(() => {
    if (cryptoList) {
      setCryptos(cryptoList);
    }
  }, [cryptoList]);

  useEffect(() => {
    if (cryptoList) {
      const filteredCrypto = cryptoList.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      );

      setCryptos(filteredCrypto);
    }
  }, [search, cryptoList]);

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
      <div>
        {!filters && (
          <div className="crypto-search">
            <Input
              placeholder="Search Crypto..."
              onChange={(e) => setSearch(e.target.value)}
              size="large"
            />
          </div>
        )}
        <Row gutter={[32, 32]} className="crypto-currency-container">
          {cryptos.map((currency) => (
            <div key={currency.uuid}>
              <Col xs={24} lg={6} sm={12} className="crypto-card">
                <Link to={`/crypto/${currency.uuid}`}>
                  <Card
                    title={`${currency.rank}. ${currency.name}`}
                    extra={
                      <img src={currency.iconUrl} className="crypto-image" />
                    }
                    hoverable
                    className="single-card"
                  >
                    <div>
                      <div className="single-card-description">
                        <GrMoney
                          style={{ marginTop: ".3rem", fontWeight: "bolder" }}
                        />
                        <p>
                          Price: {millify(currency.price)}{" "}
                          {millify(currency.symbol)}
                        </p>
                      </div>
                      <div className="single-card-description">
                        <BsGraphUpArrow
                          style={{ marginTop: ".3rem", fontWeight: "900" }}
                        />
                        <p>Market Cap: {millify(currency.marketCap)}</p>
                      </div>
                      <div className="single-card-description">
                        <MdOutlineCurrencyExchange
                          FaMoneyBillTrendUp
                          style={{ marginTop: ".3rem", fontWeight: "bolder" }}
                        />
                        <p>Daily Change: {millify(currency.change)}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </Col>
            </div>
          ))}
        </Row>
      </div>
    </>
  );
};

export default CryptoCurrencies;
