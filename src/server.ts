import express from "express";

//* CUSTOM IMPORTS
import { categoriesRoutes } from "./routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);

app.listen(3333, () => console.log("Server is Running on port 3333!"));
