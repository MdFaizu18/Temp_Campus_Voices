// importing all the necessary packages 
import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import cookieParser from "cookie-parser";
import morgan from 'morgan';
dotenv.config();

// ------------------ to import routers and middlewares ----------------------
import feebackRouter from './routes/FeedbackRouter.js'
import authRouter from './routes/authRouter.js';
import adminRouter from './routes/adminRouter.js'
import {authenticateUser} from './middleware/AuthMIddleware.js'
import errorHandlerMiddleware from "./middleware/ErrorHandlerMiddleware.js";
import { getCurrentUser, getUserRole } from "./controllers/userController.js";

const app = express();
const port = 3003;
// Use express.json() instead of bodyParser.json()
app.use(express.json());
app.use(cookieParser());
// ------------------------------------------------------------------------------
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, './public')));

//-------------------- using morgan for http request combined ------------------
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.get('/',(req,res)=>{
    res.send("hello world");
});

app.get('/api/v1/test', (req, res) => {
    res.json({ msg: 'test route' });
});

// -------------------------- Routes ------------------------------------------
app.use("/api/v1/dashboard-student/feedbacks", authenticateUser, feebackRouter);
app.use("/api/v1/admin",authenticateUser,adminRouter);
app.use("/api/v1/auth",authRouter);
app.use("/api/v1/dashboard-student/current-user",authenticateUser,getCurrentUser)
app.use("/api/v1/users/:email",getUserRole)

// --------------- For error handling occuring in our server -------------------
app.use("*", (req, res) => {
    res.status(404).json({ msg: "not found" });
});
app.use(errorHandlerMiddleware);


app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

// --------------- To listent the port and connect the mongoDB -------------------
try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
        console.log(`server running on PORT ${port}....`);
    });
} catch (error) {
    console.log(error);
    process.exit(1);
}