import { Schema, model } from "mongoose";

const publisherSchema = new Schema({
    name: {
        type: String,
        min: 2,
        required: true,
        unique: true,
    },
    location: {
        type: String,
        required: true
    }
}, { versionKey: false, timestamps: true });

const Publisher = model("publisher", publisherSchema);

export default Publisher;