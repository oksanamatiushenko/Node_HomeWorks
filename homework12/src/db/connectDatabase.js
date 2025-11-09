import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

const connectDatabase = async()=> {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Successfully connect database");
    }
    catch(error) {
        console.log("Error connect database");
        console.log(error);
    }
}
export default connectDatabase;
