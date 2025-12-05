import "dotenv/config";
import express from "express";
import cors from "cors";
import contactRoute from "./routes/contact.route";
import wakeUp from "./routes/wakeUp"

const app = express();
app.use(cors());
app.use(express.json());

app.use("/contact", contactRoute);
app.use("/ping", wakeUp)

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server ON (${PORT})`));