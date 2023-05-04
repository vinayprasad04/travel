import express from "express";
import {
  DisplayIdIterniarys,
  DisplayIterniary,
  Register,
  addToFav,
  createCategory,
  createEvent,
  createIterniary,
  createNotification,
  deleteCategory,
  displayAllNotifications,
  getCategories,
  getEventDetails,
  getEvents,
  getFav,
  listUsers,
  load,
  login,
  notificationById,
  removeFav,
  updateProfile,
} from "../controllers/Auth.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", login);
router.post("/load", isAuthenticated, load);
router.patch("/update/profile", isAuthenticated, updateProfile);
router.post("/create/category", createCategory);
router.get("/get/category", getCategories);
router.post("/delete/category", deleteCategory);
router.post("/create/event", createEvent);
router.get("/get/events", getEvents);
router.post("/get/events/details", getEventDetails);
router.post("/create/notification", createNotification);
router.get("/get/all/notification", displayAllNotifications);
router.get("/get/notification/:id", notificationById);
router.get("/get/users", listUsers);
router.post("/add/fav", isAuthenticated, addToFav);
router.post("/delete/fav", isAuthenticated, removeFav);
router.post("/get/fav", isAuthenticated, getFav);
router.post("/add/iterniary", isAuthenticated, createIterniary);
router.post("/get/iterniary/:page/:limit", isAuthenticated, DisplayIterniary);
router.get("/get/iterniary/", isAuthenticated, DisplayIdIterniarys);
export default router;
