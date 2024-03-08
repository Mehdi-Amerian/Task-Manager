const express = require('express');
const router = express.Router();
const pool = require('../db');

// Route to get all tasks
router.get('/tasks', async (req, res) => {
    try {
        const queryResult = await pool.query('SELECT * FROM Task');
        res.json(queryResult.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Route to get all statuses
router.get('/statuses', async (req, res) => {
    try {
        const queryResult = await pool.query('SELECT * FROM Status');
        res.json(queryResult.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Route to get all tags
router.get('/tags', async (req, res) => {
    try {
        const queryResult = await pool.query('SELECT * FROM Tag');
        res.json(queryResult.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Route to get all activities
router.get('/activities', async (req, res) => {
    try {
        const queryResult = await pool.query('SELECT * FROM Activity');
        res.json(queryResult.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Route to get all activity types
router.get('/activity-types', async (req, res) => {
    try {
        const queryResult = await pool.query('SELECT * FROM ActivityType');
        res.json(queryResult.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;

