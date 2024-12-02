import { getBookingsByUserId, getGuideById, getEquipmentById, getVehicleById } from "../models/bookingModel.js";

export const getUserBookings = async (req, res) => {
    const { id: userId } = req.params;
  
    try {
      const bookings = await getBookingsByUserId(userId);
  
      const processedBookings = await Promise.all(
        bookings.map(async (booking) => {
          switch (booking.type) {
            case "2":
                const guide = await getGuideById(booking.item_id);
                return {
                    ...booking,
                    service: "Travel Guide",
                    guide,
                };
            case "3":
                const equipment = await getEquipmentById(booking.item_id);
                return {
                  ...booking,
                  equipment,
                };
            case "4":
                const vehicle = await getVehicleById(booking.item_id);
                return {
                  ...booking,
                  vehicle,
                };
            default:
                console.error(`Unknown Booking Type: ${booking.type}`);
                throw new Error(`Invalid Booking Type: ${booking.type}`);
          }
        })
      );
  
      res.status(200).json(processedBookings);
    } catch (error) {
      console.error("Error fetching booking history:", error.message);
      res.status(500).send("Server Error");
    }
};
  