import mongoose from "mongoose";
import { config } from 'dotenv';

config();


const mongodb = process.env.MONGO_DB_URI;

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(mongodb);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
