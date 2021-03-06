const queryString = require("query-string");
// const path = require("path");
const express = require("express");
// const request = require("request");
const cors = require('cors');
const dataFuncs = require('./data');

const app = express();
app.use(cors());
app.set('port', 5000);

app.get('*', (req, res) => {
  const query = queryString.parse(req.url.split('?')[1]);
  if (Object.keys(query).indexOf("user") === -1) {
    res.status(404).send('No user defined');
    return;
  }
  if (query.user !== "guest") {
    res.status(404).send('Invalid user');
    return;
  }
  console.log("received valid request from ", query.user);
  res.json(dataFuncs.generateDatasetsFromFS(query.user));
});

app.listen(app.get('port'), () => {
  console.log('Charon started & ready to ferry data.\nListening on port ' + app.get('port'));
});
