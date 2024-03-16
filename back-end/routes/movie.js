import express from "express";
import createHttpError from "http-errors";
import Movie from "../model/movie.js";
const movieRouter = express.Router();

export default movieRouter;
