import { UserModel } from "../models/userModel.js";

export const UserController = {
    async getUser(req, res) {
        try {
            const userId = req.params.id;
    
            // Validate that userId is a positive integer
            if (!/^\d+$/.test(userId)) {
                return res.status(400).json({ message: 'Invalid user ID' });
            }
    
            const user = await UserModel.getUserById(parseInt(userId, 10));
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
    
            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    },
    
  
    async updateUser(req, res) {
        try {
            const userId = req.params.id; // Extract user ID from route params
            const data = req.body; // Extract update data from request body
            
            // Validate incoming data (add more robust validation if needed)
            if (!userId || Object.keys(data).length === 0) {
                return res.status(400).json({ message: "Invalid request data" });
            }

            // Call the model to update user
            const updatedUser = await UserModel.updateUserById(userId, data);

            if (!updatedUser) {
                return res.status(404).json({ message: "User not found" });
            }

            res.status(200).json({
                message: "Profile updated successfully",
                user: updatedUser,
            });
        } catch (error) {
            console.error("Update user error:", error);
            res.status(500).json({ message: "Failed to update user" });
        }
    },
  };
  
  export default UserController;
