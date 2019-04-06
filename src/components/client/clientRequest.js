const axios = require("axios");

const clientRequest = function(
  endPoint,
  method,
  data = null,
  headers,
  that,
  specific
) {
  axios[method.toLowerCase()](
    endPoint,
    data !== null
      ? data
      : {
          headers: headers
        },
    {
      headers: data !== null ? headers : false
    }
  )
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};

export default clientRequest;
