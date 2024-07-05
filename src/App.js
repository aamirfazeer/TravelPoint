import Layout from "./Layout";
import Travellers from "./pages/TravellersPage";
import VehicleRentals from "./pages/VehicleRentalsPage";
import EquipmentRentals from "./pages/EquipmentRentalsPage";
import TravelGuides from "./pages/TravelGuidesPage";
import Hotels from "./pages/HotelsPage";
import Restaurants from "./pages/RestaurantsPage";
import Authorities from "./pages/AuthoritiesPage";
import AdminHome from "./pages/AdminHomePage";
import TravelLog from "./pages/TravelLog";
import BookingInfo from "./pages/BookingInfo";
import PersonalInfo from "./pages/PersonalInfo";
import Login from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="travellers" element={<Travellers />} />
          <Route path="vehicle-rentals" element={<VehicleRentals />} />
          <Route path="equipment-rentals" element={<EquipmentRentals />} />
          <Route path="travel-guides" element={<TravelGuides />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="authorities" element={<Authorities />} />
          <Route path="personal-info" element={<PersonalInfo />} />
          <Route path="travel-log" element={<TravelLog />} />
          <Route path="booking-info" element={<BookingInfo />} />
          <Route path="home" element={<AdminHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
