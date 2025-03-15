import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/userControllers.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// update
router.put("/:id", updateUser);

// delete
router.delete("/:id", deleteUser);

// single
router.get("/:id", verifyUser, getSingleUser);

// all
router.get("/", getAllUser);
// all
router.post("/", createUser);

export default router;
