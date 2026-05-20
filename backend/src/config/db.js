import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);

        console.log(" ket noi thanh cong ");
    } catch (error) {
        console.error("Loi ket noi CSDL:", error);
        process.exit(1);
    }
};