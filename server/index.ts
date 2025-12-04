import "dotenv/config";
import express from "express";
import cors from "cors";
import contactRoute from "./routes/contact.route";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/contact", contactRoute);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server ON (${PORT})`));