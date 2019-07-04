import routes from "../routes";
import Video from "../models/Video";

export const getEditVideos = (req, res) => {
  res.send("Edit your videos");
};

// async 나를 기다려주는 무언가
// look for videos => 자바스크립트는 안기다려준다.
// 비동기라서 안기다리고 다른 프로세스 먼저 처리함
// ㅇㅋ Video 살펴보고 있어, 근데 랜더작업 있네. 이거 할게
// async는 자바스크립트야 function의 이 부분은 꼭 기다려야해!