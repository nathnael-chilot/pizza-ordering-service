import { Routes, Route } from "react-router-dom";
import LogIn from "./components/Auth/LogIn";
import SignUp from "./components/Auth/SignUp";
import SideBar from "./components/dashboard/SideBar";
import HomePage from "./components/homepage/HomePage";
import Order from "./components/orderspage/Order";
import OrdersPage from "./components/orderspage/OrdersPage";
import PopUp from "./components/PopUp";
import Root from "./components/Route/Root";
import WhoWeAre from "./components/whowearepage/WhoWeAre";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<HomePage />} />
          <Route path="/orders" element={<OrdersPage />} />
          {/* <Route path="/whoweare" element={<WhoWeAre />} /> */}
          {/* <Route path="/whoweare" element={<Order />} /> */}
          <Route path="/whoweare" element={<SideBar />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
