import express from "express";
import {
  Register,
  createCategory,
  createEvent,
  deleteCategory,
  getCategories,
  getEvents,
  load,
  login,
} from "../controllers/Auth.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", login);
router.post("/load", isAuthenticated, load);
router.post("/create/category", createCategory);
router.get("/get/category", getCategories);
router.post("/delete/category", deleteCategory);
router.post("/create/event", createEvent);
router.get("/get/events", getEvents);

export default router;
