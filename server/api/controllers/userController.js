import { pool } from "../config/db.js";

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

    async getGuidebyId(req, res) {

        const { id } = req.params;
        console.log({id});
        try {
           const result = await pool.query("SELECT * FROM guides WHERE id = $1", [id]);
            if(result.rows.length === 0){
                return res.status(404).json({message: "User Not Found"});
            }

            res.json(result.rows[0]);
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

    async getTravellerbyId(req, res) {

        const { id } = req.params;
        console.log({id});
        try {
           const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
            if(result.rows.length === 0){
                return res.status(404).json({message: "User Not Found"});
            }

            res.json(result.rows[0]);
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

    async getVehiclebyId(req, res) {
       
        const  id  = parseInt(req.params.id, 10);
        try {
           const result = await pool.query("SELECT * FROM vehicles WHERE id = $1", [id]);
           console.log("results:", result.rows)

            if(result.rows.length === 0){
                return res.status(404).json({message: "User Not Found"});
            }

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
    },

    async getEquipmentbyId(req, res) {

        const { id } = req.params;
        console.log({id});
        try {
           const result = await pool.query("SELECT * FROM equipments WHERE id = $1", [id]);
            if(result.rows.length === 0){
                return res.status(404).json({message: "User Not Found"});
            }

            res.json(result.rows[0]);
        } catch (error) {
            console.error(error);
            res.status(500).json({message: "Server Error"});
        }
    },


  };
  
  export default UserController;