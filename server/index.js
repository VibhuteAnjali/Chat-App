
//import express from 'express';
//import bodyParser from 'body-parser';
//import cors from 'cors';
//import dotenv from 'dotenv';
//import Connection from './database/db.js';
//import Route from './routes/routes.js';
//dotenv.config();
////atlas password:sDVi9tqhb0muGrMT
//const app = express();
//app.use(cors());
//app.use(bodyParser.json({ extended: true }));
//app.use(bodyParser.urlencoded({ extended: true }));
//const port = 8000;

//app.use('/', Route);
//Connection();
//app.listen(port, () => {
//	console.log(`Lisenting on port ${port}`);
//});

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import Connection from './database/db.js';
import Routes from './routes/Routes.js';


dotenv.config();
const app = express();

const PORT = 8000;

//const username = process.env.DB_USERNAME;
//const password = process.env.DB_PASSWORD;

Connection();

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);