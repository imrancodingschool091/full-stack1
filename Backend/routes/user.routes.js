import express from "express";
import {
  createUser,
  getUserById,
  getUsers,
  deleteUserById,
  deleteUsers,
  updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/",createUser);
router.get("/",getUsers);
router.get("/:id",getUserById);
router.put("/:id",updateUser);
router.delete("/",deleteUsers);
router.delete("/:id",deleteUserById)

export default router
