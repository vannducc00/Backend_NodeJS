const express = require("express");
require('dotenv').config()
const configViewEngine = require('./configs/viewEngine')
const webRoutes = require('./routes/web')

const app = express();
const port = process.env.PORT

configViewEngine(app)

app.use('/v1', webRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
