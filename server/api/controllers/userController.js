import { pool } from "../config/db.js";
import { UserModel } from "../models/userModel.js";

export const UserController = {

    async getGuides(req, res) {

        const { status } = req.query;
        console.log({status});
        try {
            let query = "SELECT * FROM guides";
            const values = [];

            if(status !== undefined){
                query += " WHERE status = $1";
                values.push(status);
            }

            const result = await pool.query(query, values);
            res.json(result.rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({message: "Server Error"});
        }
    },
    
  
    async getTravellers(req, res) {
        const { status } = req.query;
        console.log({status});
        try {
            let query = "SELECT * FROM users";
            const values = [];

            if(status !== undefined){
                query += " WHERE status = $1";
                values.push(status);
            }

            const result = await pool.query(query, values);
            res.json(result.rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({message: "Server Error"});
        }
    },

    async getVehicles(req, res){
        const { status } = req.query;
        console.log({status});
        try {
            let query = "SELECT * FROM vehicles";
            const values = [];

            if(status !== undefined){
                query += " WHERE status = $1";
                values.push(status);
            }

            const result = await pool.query(query, values);
            res.json(result.rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({message: "Server Error"});
        }
    },

    async getEquipments(req, res){
        const { status } = req.query;
        console.log({status});
        try {
            let query = "SELECT * FROM equipments";
            const values = [];

            if(status !== undefined){
                query += " WHERE status = $1";
                values.push(status);
            }

            const result = await pool.query(query, values);
            res.json(result.rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({message: "Server Error"});
        }
    }
  };
  
  export default UserController;