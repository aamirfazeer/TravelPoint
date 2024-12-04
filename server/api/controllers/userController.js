import { pool } from "../config/db.js";

export const UserController = {

    async getGuides(req, res) {

        const { status } = req.query;
        console.log({status});
        try {
            let query = "SELECT guides.*, users.first_name FROM guides INNER JOIN users ON guides.user_id = users.id";
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

    async updateGuidebyId(req, res){
        const  id  = parseInt(req.params.id, 10);
        const {status} = req.body;

        try{
            const result = await pool.query("UPDATE guides SET status = $1 WHERE id = $2 RETURNING *",
                [status, id]
            );
            if(result.rowCount === 0)
            {
                return res.status(404).json({message: "Vehicle not found"})
            }
            res.status(200).json({message: "Guide profile updated sucessfully!"});
        }catch(error){
            console.error(error);
            res.status(500).json({message: "Error updating guide!"});
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

    async updatevehiclebyId(req, res){
        const  id  = parseInt(req.params.id, 10);
        const {status} = req.body;

        try{
            const result = await pool.query("UPDATE vehicles SET status = $1 WHERE id = $2 RETURNING *",
                [status, id]
            );
            if(result.rowCount === 0)
            {
                return res.status(404).json({message: "Vehicle not found"})
            }
            res.status(200).json({message: "Vehicle updated sucessfully!"});
        }catch(error){
            console.error(error);
            res.status(500).json({message: "Error updating vehicle!"});
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

    async updateEquipmentbyId(req, res){
        const  id  = parseInt(req.params.id, 10);
        const {status} = req.body;

        try{
            const result = await pool.query("UPDATE equipments SET status = $1 WHERE id = $2 RETURNING *",
                [status, id]
            );
            if(result.rowCount === 0)
            {
                return res.status(404).json({message: "Equipment not found"})
            }
            res.status(200).json({message: "Equipment updated sucessfully!"});
        }catch(error){
            console.error(error);
            res.status(500).json({message: "Error updating equipment!"});
        }
    },

    async downloadReport(req, res){
        try{
            const [weeklyData] = await pool.query("SELECT COUNT(*) AS weekly_count FROM users YEARWEEK(created_at, 1) = YEARWEEK(CURDATE(), 1);");
            const [monthlyData] = await pool.query("SELECT COUNT(*) AS monthly_count FROM users WHERE YEAR(created_at) = YEAR(CURDATE()) AND MONTH(created_at) = MONTH(CURDATE());");

            const weeklyCount = weeklyData[0].weekly_count;
            const monthlyCount = monthlyData[0].monthly_count;

            

        }catch{
            
        }
    }


  };
  
  export default UserController;