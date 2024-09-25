import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import OrdersPage from "./components/orderspage/OrdersPage";
import Root from "./components/Route/Root";
import WhoWeAre from "./components/whowearepage/WhoWeAre";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<HomePage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/whoweare" element={<WhoWeAre />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
