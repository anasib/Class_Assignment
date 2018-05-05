const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var tablePath = "";
var reservationPath = "";
var waitingList = "";

var customers = [{
        customerName: "David",
        phone: "777-777-7777",
        email: "david@david.com",
        customerId: "unique"
    },
    {
        customerName: "Chris",
        phone: "888-888-888",
        email: "chris@chris.com",
        customerId: "very unique"
    }
];

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/customers', (req, res) => {
    return res.json(customers)
});

app.get('/api/reservations', (req, res) =>
    res.sendFile(reservationPath, 'reservation.html'));

app.get('/api/waiting', (req, res) =>
    res.sendFile(waitingList, 'waitlist.html'));

//fill in
app.post('/api/tables', (req, res) => console.log(res));


app.listen(PORT, () => console.log('Example app listening on port 3000!'))
