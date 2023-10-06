import "../Styles/CryptoHorn.css";
import { useParams } from "react-router-dom";
import { Spin, Col, Select, Typography, Space, Tag } from "antd";
import { useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
  StockOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { useGetCryptoDetailsQuery } from "../Services/CryptoAPI";
import { useGetCryptoHistoryQuery } from "../Services/CryptoAPI";
// import ShowChart from "./ShowChart";
const { Option } = Select;

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: HistoryData } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });
  const cryptoDetails = data?.data?.coin;

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Approved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <SafetyCertificateOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <StockOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

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
        <Col xs={24} lg={24} sm={18} className="coin-detail-container">
          <Col className="coin-heading-container">
            <h1 className="coin-detail-heading">
              {cryptoDetails.name} <small>({cryptoDetails.symbol})</small>
            </h1>
          </Col>
          <Col className="coin-image-container">
            <img src={cryptoDetails.iconUrl} alt={cryptoDetails.name} />
            <p>
              {cryptoDetails.description}{" "}
              <Link to={`${cryptoDetails.websiteUrl}`} target="_blank">
                See more...
              </Link>
            </p>
          </Col>

          <Col className="stats-data-container">
            <Select
              defaultValue="7d"
              placeholder="Select Time Period"
              className="select-time-period"
              onChange={(value) => setTimePeriod(value)}
            >
              {time.map((time) => (
                <Option key={time}>{time}</Option>
              ))}
            </Select>

            {/* <Col className="chart-container">
              <ShowChart
                coinName={cryptoDetails.name}
                coinHistory={HistoryData}
                currentPrice={millify(cryptoDetails?.price)}
              />
            </Col> */}
          </Col>

          <Col className="stats-heading">
            <h1 className="stats-heading-name">
              {cryptoDetails.name} <small> Value Statistics</small>
            </h1>

            {stats.map((stat, i) => (
              <Col className="stats-data-sub-container" key={i}>
                <Col className="stats-data-sub-container-heading">
                  <Typography.Text>{stat.icon}</Typography.Text>
                  <Typography.Text className="stats-title">
                    {stat.title}
                  </Typography.Text>
                </Col>
                <Typography.Text className="stats-numbers">
                  {stat.value}
                </Typography.Text>
              </Col>
            ))}
          </Col>

          <Col className="stats-heading">
            <h1 className="stats-heading-name">
              <small> Other Statistics</small>
            </h1>

            {genericStats.map((stat, i) => (
              <Col className="stats-data-sub-container" key={i}>
                <Col className="stats-data-sub-container-heading">
                  <Typography.Text>{stat.icon}</Typography.Text>
                  <Typography.Text className="stats-title">
                    {stat.title}
                  </Typography.Text>
                </Col>
                <Typography.Text className="stats-numbers">
                  {stat.value}
                </Typography.Text>
              </Col>
            ))}
          </Col>

          <Col className="links-container">
            <Space size={[0, 8]} wrap>
              {cryptoDetails.links.map((link, i) => (
                <div key={i}>
                  <Link to={`${link.url}`} target="_blank">
                    <Tag color="purple">{link.name} </Tag>
                  </Link>
                </div>
              ))}
            </Space>
          </Col>
        </Col>
      </div>
    </>
  );
};

export default CryptoDetails;
