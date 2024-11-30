import { Router } from "express";
import { getUserPosts } from "../controllers/postController.js";

const router = Router();

router.get("/:id", getUserPosts);

// router.get('/:id', (req, res) => {
//     res.json({ id: req.params.id, title: 'Sample Post' });
//   });

export default router;