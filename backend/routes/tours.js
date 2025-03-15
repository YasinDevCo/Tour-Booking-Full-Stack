import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getFeaturedTour,
  getSingleTour,
  getTourBySearch,
  getTourCount,
  updateTour,
} from "../controllers/tourControllers.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();
// create
router.post("/", createTour);

// update
router.put("/:id", updateTour);

// delete
router.delete("/:id", deleteTour);

// single
router.get("/:id", getSingleTour);

// all
router.get("/", getAllTour);

//search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

export default router