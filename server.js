const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
const axios = require("axios")

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/search', async (req, res) => {
  const username = req.body.username

  if (!username) {
      res.send(`No username found.`)
  } else {
      const { data } = await axios.get(`http://services.runescape.com/m=hiscore_oldschool/index_lite.ws?player=${username}`)

      res.send(data)
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`))