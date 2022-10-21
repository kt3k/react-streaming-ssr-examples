import http from "http";
import React from "react";
import ReactDOMServer from "react-dom/server";

const server = http.createServer((req, res) => {
  ReactDOMServer.renderToPipeableStream(<p>hello streaming SSR!</p>).pipe(res);
});

server.listen(3000);
