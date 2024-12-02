import { pool } from "../config/db.js";

export const getBookingsByUserId = async (userId) => {
  try {
    const result = await pool.query(
      "SELECT * FROM booking WHERE customer_id = $1;",
      [userId]
    );
    return result.rows;
  } catch (error) {
    throw error;
  }
};

export const getGuideById = async (id) => {
    try {
        const result = await pool.query(
            "SELECT id, name, price FROM guides WHERE id = $1;",
            [id]
        );
        return result.rows;
    } catch (error) {
        throw error;
    }
};
  
export const getEquipmentById = async (id) => {
    try {
        const result = await pool.query(
            "SELECT e.id, e.name, e.price, u.first_name, u.last_name FROM equipments e JOIN users u ON e.owner_id = u.id WHERE e.id = $1;",
            [id]
        );
        return result.rows;
    } catch (error) {
        throw error;
    }
};

export const getVehicleById = async (id) => {
    try {
        const result = await pool.query(
            "SELECT v.id, v.type, v.price, u.first_name, u.last_name FROM vehicles v JOIN users u ON v.owner_id = u.id WHERE v.id = $1;",
            [id]
        );
        return result.rows;
    } catch (error) {
        throw error;
    }
};
