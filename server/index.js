const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { PORT, BASE_URL } = require('./util/config');

const app = express();

app.use(cors());
// Serve the static files
app.use(express.static('dist'));

app.get('/:city', async (req, res) => {
  const { city } = req.params;
  await axios
    .get(`${BASE_URL}&q=${city}&aqi=no`)
    .then(({ data }) => {
      res.json(data);
    })
    .catch(() => {
      res.json({ error: `Couldn't found '${city}'` });
    });
});

const start = () => {
  app.listen(PORT, () => {
    console.log(`Server listenning on port ${PORT}...`);
  });
};

start();
