import "./App.css";
import MainPage from "./MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TravelGuide from "./TravelGuide/Components/TravelGuide";
import CryptoHorn from "./CryptoHorn/Components/CryptoHorn";
// import Exchanges from "./CryptoHorn/Components/Exchanges";
import CryptoCurrencies from "./CryptoHorn/Components/CryptoCurrencies";
import CryptoNews from "./CryptoHorn/Components/CryptoNews";
import CryptoDetails from "./CryptoHorn/Components/CryptoDetails";
import SidebarRoute from "./CryptoHorn/Components/SidebarRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/travel-guide" element={<TravelGuide />} />

          <Route element={<SidebarRoute />}>
            <Route exact path="/crypto-horn" element={<CryptoHorn />} />
            <Route
              exact
              path="/crypto-horn/cryptocurrencies"
              element={<CryptoCurrencies />}
            />
            <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route exact path="/crypto-horn/news" element={<CryptoNews />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
