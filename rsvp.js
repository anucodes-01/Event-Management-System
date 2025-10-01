// rsvp.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3032;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root',     // your MySQL password
    database: 'event_db'  // your database name
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err.stack);
        return;
    }
    console.log(" Connected to MySQL database");
});

// Optional GET route for testing
app.get('/', (req, res) => {
    res.send("🎉 RSVP backend is running!");
});

// Corrected POST route to match frontend
app.post('/submit-rsvp', (req, res) => {
    const { event, organizer, date, time } = req.body;

    if (!event || !organizer || !date || !time) {
        return res.status(400).json({ success: false, message: 'Missing fields' });
    }

    const sql = 'INSERT INTO bookings (event_type, organizer, event_date, event_time) VALUES (?, ?, ?, ?)';
    db.query(sql, [event, organizer, date, time], (err, result) => {
        if (err) {
            console.error(" Error inserting data:", err);
            return res.status(500).json({ success: false, message: 'Database error' });
        }
        res.json({ success: true, message: 'Event scheduled successfully!' });
    });
});

app.listen(port, () => {
    console.log(` RSVP app running at: http://localhost:${port}`);
});
