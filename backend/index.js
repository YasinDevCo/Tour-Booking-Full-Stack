import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/review.js";
import bookingRoute from "./routes/booking.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const coresOptions = {
  origin: true,
  credentials: true,
};
// database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL),
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    };
    console.log("<------------ MongoDB database Connected ------------>", port);
  } catch (err) {
    console.log(
      "<------------ MongoDB database Connection Faild ------------>",
      err
    );
  }
};

//middleware
app.use(express.json());
app.use(cors(coresOptions));
app.use(cookieParser());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);
app.listen(port, () => {
  connect();
  console.log("<------------ server listening on port ", port, "------------>");
});
