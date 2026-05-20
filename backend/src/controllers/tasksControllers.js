import Task from "../models/Task.js";


export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.status(200).json(tasks);
    } catch (error) {
        console.log("Loi khi goi getAllTasks", error);
        res.status(500).json({ message: "Loi he thong" });
    }
};

export const createTasks = async (req, res) => {
    try {
        const { title } = req.body;
        const task = new Task({ title });
        const newTask = await task.save();
        res.status(201).json(newTask);

    } catch (error) {
        console.log("Loi khi goi createTasks", error);
        res.status(500).json({ message: "Loi he thong" });
    }
};

export const updateTasks = async (req, res) => {
    try {
        const { title, status, completedAt } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { title, status, completedAt },
            { new: true, runValidators: true }
        );
        if (!updatedTask) {
            return res.status(404).json({ message: "khong tim thay nhiem vu" });
        }
        res.status(200).json(updatedTask);
    } catch (error) {
        console.log("Loi khi goi updateTasks", error);
        res.status(500).json({ message: "Loi he thong" });
    }
};

export const deleteTasks = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            return res.status(404).json({ message: "khong tim thay nhiem vu" });
        }
        res.status(200).json({ message: "xoa thanh cong" })
    } catch (error) {
        console.log("Loi khi goi deleteTasks", error);
        res.status(500).json({ message: "Loi he thong" })
    }
};