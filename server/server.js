import express from "express";
import cors from "cors";
import bestSellerRouter from "./router/bestSellerRouter.js";

const server = express();
const port = 8080;

/* 공통적인 처리 미들웨어 정의 */
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());

/* 요청에 대한 미들웨어 정의 */
server.use("/", bestSellerRouter);

server.listen(port, () => {
  console.log(`${port} server start`);
});
