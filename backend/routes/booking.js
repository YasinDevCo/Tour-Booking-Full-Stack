import express from "express";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import {
  createBooking,
  getAllBooking,
  getBooking,
} from "../controllers/bookingControllers.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/:id", getBooking);
router.get("/", getAllBooking);
// router.post("/",verifyUser, createBooking);
// router.get("/:id", verifyUser, getBooking);
// router.get("/",verifyAdmin, getAllBooking);

export default router;
