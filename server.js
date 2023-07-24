const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const mongoose = require("mongoose");
const path = require("path")
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

//MongoDB Connection
mongoose
  .connect(process.env.MONGO_DB_URI + process.env.DATABASE)
  .then(() => console.log("MongoDB connection established"))
  .catch(() => console.log("Error connecting to MongoDB"));

// Routes
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
  //__dirname : It will resolve to your project folder.
});
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
