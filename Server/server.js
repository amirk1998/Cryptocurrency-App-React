require('dotenv').config();

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;

app.use(cors());

app.get('/api/exchange', async (req, res) => {
  const id = req.query.id;
  const idArray = Array.isArray(id) ? id : [id]; // convert to array if single ID provided
  const url = `https://pro-api.coinmarketcap.com/v1/exchange/info?id=${idArray.join(
    ','
  )}`;
  const headers = {
    'X-CMC_PRO_API_KEY': apiKey,
    'Accept-Encoding': 'gzip',
  };
  try {
    const response = await axios.get(url, { headers });
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error getting exchange metadata');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// require('dotenv').config();

// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');

// const app = express();
// const port = process.env.PORT || 3000;
// const apiKey = process.env.API_KEY;

// app.use(cors());

// app.get('/api/exchange/:id', async (req, res) => {
//   const id = req.params.id;
//   const url = `https://pro-api.coinmarketcap.com/v1/exchange/info?id=${id}`;
//   const headers = {
//     'X-CMC_PRO_API_KEY': apiKey,
//     'Accept-Encoding': 'gzip',
//   };
//   try {
//     const response = await axios.get(url, { headers });
//     res.send(response.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error getting exchange metadata');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });
