const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const { PORT, BASE_URL } = require('./util/config');

app.use(cors());
// Serve the static files
app.use(express.static('dist'));

// Health check for deploy purpose
app.get('/health', async (req, res) => {
  res.send('ok');
});

app.get('/:city', async (req, res) => {
  const city = req.params.city;
  await axios
    .get(`${BASE_URL}&q=${city}&aqi=no`)
    .then(({ data }) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({error: `Couldn't found '${city}'`});
    });
});

const start = () => {
  app.listen(PORT, () => {
    console.log(`Server listenning on port ${PORT}...`);
  });
};

start();