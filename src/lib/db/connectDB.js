import mongoose from "mongoose";


const connectDb = async () => {
    try {
        const {connection} = mongoose.connect(process.env.DB_URL);
        console.log('database connect with : ',connection.host);
    } catch (error) {
        console.log('error while database connection : ',error.message);
    }
}

export default connectDb;