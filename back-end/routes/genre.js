import express from "express";
import createHttpError from "http-errors";
import Genre from "../model/genre.js";

const genreRouter = express.Router();

export default genreRouter;
