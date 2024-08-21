const express = require('express');
const { getVideos, addVideo } = require('../controllers/videoController');
const router = express.Router();

// Get all videos or filter by position
router.get('/', getVideos);

// Add a new video (for admin use)
router.post('/add', addVideo);

module.exports = router;
