import http from "http";
import React from "react";
import ReactDOMServer from "react-dom/server";

const server = http.createServer((req, res) => {
  const str = ReactDOMServer.renderToString(<h1>hello SSR!</h1>);
  res.write(str);
  res.end();
});

server.listen(3000);
