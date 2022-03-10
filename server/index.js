
import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/tasks.js';
import userRoutes from './routes/users.js';
import * as path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const dbURL = process.env.DB_URL;

mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Database Connected!!")
});

app.get('/', (req, res) => {
    res.send("Welcome to ToDo app!")
})

app.use('/', postRoutes);
app.use('/users', userRoutes);



const port = process.env.PORT || 4001;

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/public/index.html'));
// });

app.listen(port, () => {
    console.log(`Welcome to server : ${port}`);
})
