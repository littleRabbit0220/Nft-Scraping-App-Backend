const express = require('express');
const app = express();
const axios  = require('axios');
const cors = require('cors');
app.use(cors());

app.get('/getData', (req, res) => {
  axios.get("https://raritysniper.com/nft-drops-calendar")
  .then(response => {
    console.log(response)
    res.send(response.data);
  })
  .catch(err => res.send(err))
  
});

app.listen(5000,() => {
  console.log('server is running.');
});