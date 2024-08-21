const Video = require('../models/Video');

exports.getVideos = async (req, res) => {
    try {
        const { position } = req.query;
        const videos = await Video.find(position ? { position } : {});
        res.json(videos);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching videos' });
    }
};

exports.addVideo = async (req, res) => {
    try {
        const { title, position, url, isCoachPlus } = req.body;
        const video = new Video({ title, position, url, isCoachPlus });
        await video.save();
        res.status(201).json({ message: 'Video added successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error adding video' });
    }
};

