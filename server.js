const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // To serve static files like HTML, CSS, JS

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myDatabase', { useNewUrlParser: true, useUnifiedTopology: true });
// OR if using MongoDB Atlas
// mongoose.connect('your-mongodb-atlas-connection-string', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Schemas and Models
const memberSchema = new mongoose.Schema({
    name: String,
    email: String,
    contact: String,
    birthday: Date,
    studentId: String,
    message: String
});

const eventRegistrationSchema = new mongoose.Schema({
    name: String,
    email: String,
    year: String
});

const Member = mongoose.model('Member', memberSchema);
const EventRegistration = mongoose.model('EventRegistration', eventRegistrationSchema);

// Serve the HTML forms
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/events', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'events.html'));
});

app.get('/resources', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'resources.html'));
});

app.get('/membership', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'membership.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/shop', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'shop.html'));
});

app.get('/registration', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'registration.html'));
});
app.get('/terms', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'terms.html'));
});
app.get('/privacy', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'privacy.html'));
});

// Handle form submissions
app.post('/submit_membership', (req, res) => {
    const newMember = new Member({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        birthday: req.body.birthday,
        studentId: req.body.studentId,
        message: req.body.message
    });

    newMember.save((err) => {
        if (err) {
            res.send(err);
        } else {
            res.send('Successfully saved member information!');
        }
    });
});

app.post('/submit_contact', (req, res) => {
    const newContact = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    };

    // Here you would save newContact to the database or handle it as needed
    // For now, we will just respond back
    res.send('Successfully received your message!');
});

app.post('/submit_registration', (req, res) => {
    const newRegistration = new EventRegistration({
        name: req.body.name,
        email: req.body.email,
        year: req.body.year
    });

    newRegistration.save((err) => {
        if (err) {
            res.send(err);
        } else {
            res.send('Successfully registered for the event!');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});
