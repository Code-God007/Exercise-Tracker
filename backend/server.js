const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

require("dotenv").config();

const exerciseRouter = require("./routes/exercises");
const userRouter = require("./routes/users");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Database Connection
const URI = process.env.ATLAS_URI;
mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once("open", () => console.log("MongoDB Connected"));

app.use("/exercises", exerciseRouter);
app.use("/users", userRouter);

app.listen(port, () => console.log(`Server is running on port: ${port}`));
