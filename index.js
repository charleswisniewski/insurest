import express from 'express';
import policies from './db/policy';
// Set up the express app
const app = express();
// get all todos
app.get('/policy', (req, res) => {
  res.status(200).send(
      policies
  )
});

// app.post('/policy', (req, res) => {
//     res.status(200).send(
//         policies
//     )
//   });
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
