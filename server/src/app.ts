import * as express from "express";
import cors from "cors"
require("dotenv").config();

const app = express.default();
import indexRoutes from './routes'

const PORT = 5000;

app.use(cors())
app.use(express.json());
app.use('/api', indexRoutes)

app.listen(PORT, () => {
  console.log("your app is now listening on port: ", PORT);
});
