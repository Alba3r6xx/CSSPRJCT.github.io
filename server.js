const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Add this line to handle JSON bodies
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb+srv://albaob96:0XsCHgVe3qlmxcQg@cluster0.kp08g.mongodb.net/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

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

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const shopSchema = new mongoose.Schema({
    customerName: String,
    mobileNumber: String,
    address: String,
    paymentMethod: String,
    paymentDetails: mongoose.Schema.Types.Mixed, // Use Mixed type for different payment details
    cart: Array // Add cart to store purchased items
});

const Member = mongoose.model('Member', memberSchema);
const EventRegistration = mongoose.model('EventRegistration', eventRegistrationSchema);
const Contact = mongoose.model('Contact', contactSchema);
const ShopOrder = mongoose.model('ShopOrder', shopSchema);

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

// Handle form submissions
app.post('/submit_membership', async (req, res) => {
    try {
        const newMember = new Member({
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            birthday: req.body.birthday,
            studentId: req.body.studentId,
            message: req.body.message
        });

        await newMember.save();
        res.status(200).send('Successfully saved member information!');
    } catch (err) {
        res.status(500).send('Error saving member information.');
    }
});

app.post('/submit_contact', async (req, res) => {
    try {
        const newContact = new Contact({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });

        await newContact.save();
        res.status(200).send('Successfully received your message!');
    } catch (err) {
        res.status(500).send('Error processing your message.');
    }
});

app.post('/submit_registration', async (req, res) => {
    try {
        const newRegistration = new EventRegistration({
            name: req.body.name,
            email: req.body.email,
            year: req.body.year
        });

        await newRegistration.save();
        res.status(200).send('Successfully registered for the event!');
    } catch (err) {
        res.status(500).send('Error registering for the event.');
    }
});

app.post('/submit_shop', async (req, res) => {
    try {
        const newOrder = new ShopOrder({
            customerName: req.body.customerName,
            mobileNumber: req.body.mobileNumber,
            address: req.body.address,
            paymentMethod: req.body.paymentMethod,
            paymentDetails: req.body.paymentDetails,
            cart: req.body.cart // Save cart items
        });

        await newOrder.save();
        res.status(200).send({ success: true, message: 'Order placed successfully!' });
    } catch (err) {
        res.status(500).send({ success: false, message: 'Error placing order.', error: err });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});
