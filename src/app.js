const express = require('express');
const connectDB = require('./config/db');
const routes = require('./api/routes');

const app = express();
connectDB();

app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
