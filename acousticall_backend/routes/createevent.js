const express = require('express');
const router = express.Router();
const Event = require('../models/Event')
router.post('/createevent', async (req, res) => {
    try {
      const event = new Event(req.body);
      await event.save();
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  module.exports = router;