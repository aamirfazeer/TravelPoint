import Layout from "./Layout";
import Travellers from "./pages/TravellersPage";
import VehicleRentals from "./pages/VehicleRentalsPage";
import EquipmentRentals from "./pages/EquipmentRentalsPage";
import TravelGuides from "./pages/TravelGuidesPage";
import Report from "./pages/Report";
import AdminHome from "./pages/AdminHomePage";
import TravelLog from "./pages/TravelLog";
import BookingInfo from "./pages/BookingInfo";
import PersonalInfo from "./pages/PersonalInfo";
import Login from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import GuideRequest from "./pages/GuideRequest";
import EquipmentRequest from "./pages/EquipmentRequest";
import VehicleRequest from "./pages/VehicleRequest"

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
          <Route path="Report" element={<Report />} />
          <Route path="personal-info" element={<PersonalInfo />} />
          <Route path="travel-log" element={<TravelLog />} />
          <Route path="booking-info" element={<BookingInfo />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="home" element={<AdminHome />} />
          <Route path="guide-request/:id" element={<GuideRequest />} />
          <Route path="equipment-request/:id" element={<EquipmentRequest />} />
          <Route path="vehicle-request/:id" element={<VehicleRequest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
