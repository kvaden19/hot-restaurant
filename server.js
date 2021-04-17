// DEPENDENCIES
const express = require('express');
const path = require('path');

// Set up the Express App
const app = express();
var PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DATA
let tables = [
    {
        name: 'Kelly',
        phone: '412-555-5555',
        email: 'kelly@fakemail.com',
        id: 27
    },
    {
        name: 'Brian',
        phone: '856-555-5555',
        email: 'brian@fakemail.com',
        id: 17
    },
    {
        name: 'Nestor',
        phone: '609-555-5555',
        email: 'nestor@fakemail.com',
        id: 35
    }
];

let waitlist = [
    {
        name: 'John',
        phone: '212-555-5555',
        email: 'john@fakemail.com',
        id: 50
    }
];

// ROUTES
// API Routes
app.get('/api/tables', (req, res) => res.json(tables));

app.get('/api/waitlist', (req, res) => res.json(waitlist));

// Routes to display HTML
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

// Routes to handle data

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));