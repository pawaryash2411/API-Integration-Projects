import { Chart } from "react-chartjs-2";
import { Col } from "antd";
import "chartjs-adapter-moment";
// import { useEffect } from "react";

const ShowChart = ({ coinHistory, coinName }) => {
  // Chart.unregister(Chart.controllers.line);
  // Chart.register(Chart.controllers.line);

  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: `${coinName} Price`,
        data: coinPrice,
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: "linear",
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div>
      <Col>
        <Col className="chart-price-container">
          <h1 className="chart-heading">{coinName} Price Chart</h1>
          <h1 className="price-change">Change: {coinHistory?.data?.change}</h1>
        </Col>
        <Chart options={options} data={data} />
      </Col>
    </div>
  );
};

export default ShowChart;
