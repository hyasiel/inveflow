import express from "express";
const app = express();
import "dotenv/config";
const port = process.env.SERVER_PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log("the server listen in port ", port);
});
