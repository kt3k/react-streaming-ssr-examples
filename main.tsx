const http = require("http");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

const server = http.createServer((req, res) => {
  const str = ReactDOMServer.renderToString(<h1>hello SSR!</h1>);
  res.write(str);
  res.end();
});

server.listen(3000);
