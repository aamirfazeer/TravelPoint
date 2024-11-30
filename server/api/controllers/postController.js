import { getPostsByUserId } from "../models/postModel.js";

export const getUserPosts = async (req, res) => {
  const { id: userId } = req.params;
  try {
    const posts = await getPostsByUserId(userId);
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res.status(500).send("Server Error");
  }
};