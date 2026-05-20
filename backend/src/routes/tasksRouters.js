import express, { Router } from "express";
import {
    getTasks,
    createTasks,
    updateTasks,
    deleteTasks
} from "../controllers/tasksControllers.js";

const router = express.Router();

router.get("/", getTasks);

router.post("/", createTasks);

router.put("/:id", updateTasks);

router.delete("/:id", deleteTasks);


export default router;