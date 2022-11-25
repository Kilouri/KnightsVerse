const express = require('express')
const statusCode = require('http-status-codes')
const axios = require('axios')

const app = express()

const http = axios.create({
    baseURL: "https://api.starton.io/v3",
    headers: {
        "x-api-key": 'sk_live_56776756-339d-4eee-9774-2c06c8d701cc', //API KEY COPIED FROM STARTON
    },
})

app.listen(8080, () => {
  console.log('Server started on port 8080');
}
);

app.get('/health', (req, res) => {
    res.status(statusCode.OK).send('OK');
    }
);

//use the http with axios
app.get('/api', (req, res) => {
    http.get('/api').then((response) => {
        res.status(statusCode.OK).send(response.data);
    }).catch((error) => {
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(error);
    });
});