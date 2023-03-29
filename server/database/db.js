//import  dotenv  from "dotenv";
//dotenv.config();
//const userName=process.env.DB_USERNAME;
//const password=process.env.DB_PASSWORD;
//const URL = `mongodb://${userName}:${password}@ac-dhv6kgm-shard-00-00.ijxwt9p.mongodb.net:27017,ac-dhv6kgm-shard-00-01.ijxwt9p.mongodb.net:27017,ac-dhv6kgm-shard-00-02.ijxwt9p.mongodb.net:27017/?ssl=true&replicaSet=atlas-u43ovo-shard-0&authSource=admin&retryWrites=true&w=majority`
import mongoose from 'mongoose';
const Connection = async () => {
	const URL ="mongodb://localhost:27017";
	try {
		await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
		console.log('Database Connected Succesfully');
} catch(error) {
		console.log('Error: ', error.message);
}

}
export default Connection;