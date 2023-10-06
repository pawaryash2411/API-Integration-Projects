import { useGetCryptoNewsQuery } from "../Services/CryptoNewsAPI";
import "../Styles/CryptoHorn.css";
import { Spin, Row, Col, Card } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CryptoNews = () => {
  const { data, isFetching } = useGetCryptoNewsQuery();
  const newsData = data?.coindesk;
  const [showNews, setShowNews] = useState([]);
  console.log("DATA", data);
  console.log("MAINDATA", newsData);
  useEffect(() => {
    if (newsData) {
      setShowNews(newsData);
    }
  }, [newsData]);

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
      <div className="news-data-container">
        <Row>
          {showNews.map((news, i) => (
            <Col xs={24} sm={12} lg={8} key={i}>
              <Card hoverable className="news-card">
                <Link to={news.url} target="_blank">
                  <div className="news-content-container">
                    <h2 className="news-title">{news.title}...</h2>
                    <h6 className="news-description">
                      {news.description > 50
                        ? `${news.description.substring(0, 50)}...`
                        : news.description}
                    </h6>
                  </div>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};
export default CryptoNews;
