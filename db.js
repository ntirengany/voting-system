const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const PORT = 3300;

app.use(bodyParser.urlencoded({ extended: false }));

// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: 'bkygjmgnpeqttueikx0q-mysql.services.clever-cloud.com',
  user: 'u2dgdso2fcf3vvbb',
  password: 'mlyU8LDfN1hBQC8GAIDn',
  database: 'bkygjmgnpeqttueikx0q',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

let response = '';

db.query('SELECT * FROM candidates', (err, results) => {
  if (err) {
    console.error('Error retrieving candidates:', err);
    res.send(`END Error retrieving candidates`);
  } else {
    results.forEach((candidate) => {
      response += `\n${candidate.id}. ${candidate.names}`;
    });
    console.log(response);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
