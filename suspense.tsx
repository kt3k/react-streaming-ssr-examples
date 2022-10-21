import http from "http";
import React, { Suspense } from "react";
import ReactDOMServer from "react-dom/server";

const server = http.createServer((req, res) => {
  ReactDOMServer.renderToPipeableStream(<App />).pipe(res);
});

const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
	<Slow />
      </Suspense>
    </div>
  );
}

let done = false;
const DELAY = 2000;

const Slow = () => {
  if (done) {
    done = false
    return (
      <p>
        <b>Hello World!!</b>
      </p>
    )
  }
  throw new Promise((resolve) =>
    setTimeout(() => {
      done = true
      resolve(true)
    }, DELAY)
  )
}

server.listen(3000);
