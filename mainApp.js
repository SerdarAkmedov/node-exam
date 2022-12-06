const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello This is home page");
  }
  if (req.url === "/about") {
    res.end("Hello This is About Page!");
  }
  res.end(`
  <h1>Opps!</h1>
  <p>Not Found page!</p>
  <a href="/">Let's back to home page</a>
  `)
});

server.listen(5000);
