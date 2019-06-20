// 먼저 웹 서버 객체를 만들어야 한다.
// createServer 메서드로 서버 객체를 생성할 수 있다.

const http = require("http");
// http 모듈을 불러온다.
// http 모듈에는 각종 요청과 연결 처리를 위한 server 객체가 존재한다.

// HTTP(HyperText Transfer Protocol)은 TCP/IP 기반 프로토콜이다.
// HTML(HyperText Markup Language) 페이지를 전달하는데 주로 쓰인다.

const server = http.createServer();
// 서버 생성 메서드
server.listen(5000, function() {
  console.log("Listening on: http://localhost:5000");
});
// 서버에 필요한 포트를 할당하기 위해
// 포트번호와 서버 실행시 출력할 간단한 메세지를 반환하는 함수를
// Argument 값으로 넣는다.

// 서버는 열려있지만, 서버에 들어갔을때 어떻게 처리하겠다는 내용이 없다.
// 따라서 어떤 내용도 출력하지 못하는 상태이다.

