
import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
const app = express();

if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
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
    res.send("Welcome to memories app!")
})

app.use('/posts', postRoutes);
app.use('/users', userRoutes);



const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Welcome to server : ${port}`);
})