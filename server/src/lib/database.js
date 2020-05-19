import mongoose from "mongoose";

export async function connectDB(){
    try {
        await mongoose.connect('mongodb://localhost/graphqlreact01', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('Mongo is connect')
    } catch {
        console.log('Connect error!')
    }
}