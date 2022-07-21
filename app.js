const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/api/:id', (req, res) => {
  if (req.params.balls) {
    res.send(`Get resource for ${req.params.id}.`);
  }
	
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
