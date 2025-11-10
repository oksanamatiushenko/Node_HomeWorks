import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

const connectDatabase = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Successfully connected to database");
    } catch (error) {
        console.log("Error connecting database");
        console.log(error);
        throw error;
    }
}

export default connectDatabase;