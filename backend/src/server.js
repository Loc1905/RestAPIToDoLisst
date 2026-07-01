import express from "express";
import tasksRoutes from "./routes/tasksRouters.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5001;


app.use("/api/tasks", tasksRoutes);
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server bat dau tren cong ${PORT}`);
    });
});


