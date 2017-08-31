const queryString = require("query-string");
// const path = require("path");
const express = require("express");
// const request = require("request");

const datasets = {
  hades: {
    dataURLStem: "/data/",
    pathogen: {
      ebola: "c=division&r=division",
      zika: "",
      default: "zika"
    }
  }
};

const app = express();
app.set('port', 5000);

app.get('*', (req, res) => {
  const query = queryString.parse(req.url.split('?')[1]);
  if (Object.keys(query).indexOf("user") === -1) {
    res.status(404).send('No user defined');
    return;
  }
  if (query.user !== "hades") {
    res.status(404).send('Invalid user');
    return;
  }
  res.json(datasets[query.user]);
});

app.listen(app.get('port'), () => {
  console.log('Charon started. Listening on port ' + app.get('port'));
});


console.log("EOF");
