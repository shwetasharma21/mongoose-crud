const express = require("express");
const mongoose = require("mongoose");

const userRouter = require("./routes/userRouter");

const app = express();
const port = 9696;

mongoose.connect(
  "mongodb://localhost:27017/myDb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      throw err;
    }
    console.log("Connected to DB");
  }
);

app.use(express.json());

app.use("/user", userRouter);

app.listen(port, () => console.log(`Server is listening at port ${port}`));
