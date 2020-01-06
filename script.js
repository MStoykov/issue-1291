const port = process.env.PORT || 9001;

require('http').createServer((req, res) => {
  res.end(`Hello World!${port}`);
}).listen(port, err => {
  if (err) {
    console.log('something bad happened', err);
  }
  console.log(`Pure http server is listening on ${port}`);
});
