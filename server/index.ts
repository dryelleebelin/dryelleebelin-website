import "dotenv/config";
import express from "express";
import cors from "cors";
import contactRoute from "./routes/contact.route.ts";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/contact", contactRoute);

app.listen(3333, () => console.log("Server ON (3333)"));
