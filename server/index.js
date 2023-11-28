import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import authRoutes from "./routes/auth.js";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";
import "./config/multer.js";
import pictureRouter from "./routes/picture.js";
import path from "path";
import upload from "./config/multer.js";
import { create } from "./controllers/picture.js";
/* CONFIGURATION */
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* FILE STORAGE */
//const storage = multer.diskStorage({
//  destination: function (req, file, cb) {
//    cb(null, path.join(__dirname, "public/assets"));
//  },
//  filename: function (req, file, cb) {
//    cb(null, file.originalname);
//  },
//});

/* ROUTES WITH FILES */
app.use("/pictures", upload.single("file"), create);

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);
app.use("/products", clientRoutes);

const PORT = process.env.PORT || 9000;

mongoose.set("strictQuery", true);

  mongoose.connect(`${process.env.MONGO_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("MongoDB connected");
  }).catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

export default app;
