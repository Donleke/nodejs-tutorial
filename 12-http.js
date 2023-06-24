const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our website");
  }

  if (req.url === "/about") {
    res.end("Here is a little about our history");
  }

  res.end(`
  
  <h1>Oops!</h1>
  <p>The page you are looking for does not exist</p>
 <a href="/">Back home</a>

  `);
});

server.listen(5000);
