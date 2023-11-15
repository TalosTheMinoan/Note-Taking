const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Sample notes array (simulating a database)
let notes = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/notes', (req, res) => {
    res.json(notes);
});

app.post('/notes', (req, res) => {
    const { title, content } = req.body;
    const newNote = { title, content };
    notes.push(newNote);
    res.json({ message: 'Note added successfully', note: newNote });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
