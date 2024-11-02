// This is your server file :)
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import pageRouter from "./routes/page.routes";
dotenv.config();

const app = express();

app.set("views", path.join(__dirname, "../src/views"));
app.set("view engine", "ejs");

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", pageRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
