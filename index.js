import http from "http";

const host = "0.0.0.0";
const port = 4000;



const server = http.createServer(http.createServer(function (req, res) {
  res.end("Test");
}));
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
