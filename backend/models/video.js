const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    position: { type: String, enum: ['Goalkeepers', 'Centerbacks', 'Fullbacks', 'Midfielders', 'Wingers', 'Strikers'], required: true },
    url: { type: String, required: true },
    isCoachPlus: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Video', videoSchema);
