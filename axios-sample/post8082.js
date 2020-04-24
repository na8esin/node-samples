const axios = require('axios');
const querystring = require('querystring');

axios.defaults.baseURL = 'http://localhost:8082/privateApi/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.post('division-api/call-centers', 
            querystring.stringify({
              controller: 'UserInfo' ,
              action: 'index',
              identity: 'order',
              usersId: 1,
              }))
    .then(function (response) {
      console.log(response.data);
    });
