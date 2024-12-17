import express from "express";
import {
    registerUser,
    loginUser,
    getProfile,
    getAllUsers,
    updateUser,
    deleteUser,
} from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getProfile);
router.get("/all", protect, getAllUsers);
router.put("/update/:id", protect, updateUser);
router.delete("/delete/:id", protect, deleteUser);

export default router;
