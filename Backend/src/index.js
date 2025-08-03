import express from "express";
import cors from "cors";
import { serverConfig } from "./config/serverConfig.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import connectDB from "./config/dbConfig.js";
import router from "./routes/index.route.js";

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api", router);

app.use(errorMiddleware);

app.listen(serverConfig.PORT, async () => {
  try {
    connectDB();
    console.log(
      `Server is running on port http://localhost:${serverConfig.PORT}`
    );
  } catch (error) {
    console.log(error);
  }
});
