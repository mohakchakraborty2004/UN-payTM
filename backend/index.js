const express = require('express');
const cors = require('cors');
const { router } = require('./Routes/Router');
const { acc_router } = require('./Routes/accountRouter');

const app = express();

app.use(express.json());
app.use(cors());

app.use("/paytm/v1" , router);
app.use("/paytm/v2", acc_router)

app.listen(3000);

