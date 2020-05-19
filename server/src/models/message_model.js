import { Schema, model } from "mongoose";

const message_schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: { 
        type: String,
        required: true
    },
    author:  {
        type: String,
        required: true
    }
})

export default model('message_schema', message_schema)