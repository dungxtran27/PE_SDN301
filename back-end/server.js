import express from "express";
import morgan from "morgan";
import createError from "http-errors";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database.js";
import genreRouter from "./routes/genre.js";
import movieRouter from "./routes/movie.js";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
// Ghi log khi cos request call api
app.use(morgan("dev"));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Only allow requests from this origin
    methods: "GET,HEAD,PUT, POST, PATCH, DELETE", // Only allow specific HTTP methods
    // preflightContinue: true,
    // credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use("/genre", genreRouter);
app.use("/movie", movieRouter);

// Chỉ định middleware kiểm soát requests không hợp lệ
app.use(async (req, res, next) => {
  next(createError.NotFound()); // Có thể bổ sung message trong hàm NotFound
});
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
