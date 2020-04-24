const axios = require('axios');

axios.get('http://localhost:3000/')
    .then(function (response) {
      console.log(response.data);
    });
