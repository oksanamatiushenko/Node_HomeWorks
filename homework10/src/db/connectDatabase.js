import sequelize from "./sequelize.js";

const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log("Seccessfully connect database");
    }
    catch(error) {
        console.log(`Error connect database: ${error.message}`);
        throw error;
    }
}

export default connectDatabase;