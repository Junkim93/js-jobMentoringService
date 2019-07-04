import "./db";
import app from "./app";
import "./models/Video";
import "./models/Comment";

const handleEventListening = () => {
  console.log(`⚡️ Listening on: http://localhost:${process.env.PORT}`);
};

app.listen(process.env.PORT, handleEventListening);

// listen 메서드에 포트 번호와 함수를 전달한다.
// 위에서는 express라는 프레임워크에 담겨져 있는 코드가 자동으로
// HTTP 기반 서버를 만드는 것을 도와준다.
