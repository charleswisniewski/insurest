import express from 'express';

const policy = require('./routes/policy')

// Set up the express app
const app = express();
// get all policies
app.get('/policy', policy.policy);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
