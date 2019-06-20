import express from "express";
import morgan from "morgan";
// const express = require("express");
// 폴더에서 express 파일을 찾는 명령어
const app = express();
// express 함수를 실행한 리턴값을 상수 app에 할당

const PORT = 4000;
// 포트 번호 대신 숫자 상수에 할당

const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};
// 서버가 성공적으로 접속됐음을 알리는 역할

const handleHome = (req, res) => res.send("Hello from home");
// 서버가 하는 일은 HTML로 응답하는 것
// 만약 로그인을 위해 id랑 pw를 보낸다면,
// request는 그 정보를 읽어온다.
// response로 정보를 전달해준다.

const betweenHome = (req, res, next) => {
  console.log("between");
  next();
};

app.use(betweenHome);
// 미들웨어의 역할, 코드는 위에서부터 아래로 시작되기 때문에
// 순서에 유의해서 배치해야지 미들웨어가 실행됨

app.get("/", handleHome);
// 단순히 정보를 읽어오는 것
// 루트 URL의 정보를 읽어오고, handleHome 함수를 실행함
// 읽은 정보를 전달해줘야 함
// betweenHome이 middlewa됨e의 역할을 함
// next() 메서드가 없다면 최종 값을 리턴하지 못해서 로딩이 계속됨

app.listen(PORT, handleListening);
// listen 메서드에 포트 번호와 함수를 전달한다.

// 위에서는 express라는 프레임워크에 담겨져 있는 코드가 자동으로
// HTTP 기반 서버를 만드는 것을 도와준다.
