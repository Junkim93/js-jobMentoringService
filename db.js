import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false
});

// 새로운 버전의 Mongoose는 이런 식으로 Configuration 을 보낼 수 있다.

const db = mongoose.connection;

const handleOpen = () => {
  console.log("🍏 Connected to DB, Cool!");
};

const handleError = () => {
  console.log("🍎 Error");
};

db.once("open", handleOpen);
db.on("error", handleError);

// .once 는 한 번 실행
  