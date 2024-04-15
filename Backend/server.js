const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const routes = require('./routes');
app.use(bodyParser.json());
// Mount the routes from routes.js
app.use('/', routes);

app.get("/", (req, res) => {
    res.json(`Server is running on ${port}`)
})

app.listen(port, () => {
    console.log(`🚀Server is running on port ${port}`);
  });