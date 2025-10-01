CREATE DATABASE IF NOT EXISTS event_db;

USE event_db;

CREATE TABLE IF NOT EXISTS bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_type VARCHAR(255),
    organizer VARCHAR(255),
    event_date DATE,
    event_time VARCHAR(255)
);

-- View all bookings in the table
SELECT * FROM bookings;
