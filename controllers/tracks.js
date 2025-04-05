const Track = require('../models/track.js');
const express = require('express');
const router = express.Router();



// CREATE - POST /tracks 

router.post('/', async (req, res) => {
    try {
        const createdTrack = await Track.create(req.body);
        res.status(201).json(createdTrack);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// INDEX - GET /tracks 

router.get('/', async (req, res) => {
    try {
        const foundTracks = await Track.find();
        res.status(200).json(foundTracks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// SHOW - GET /tracks/:id 

router.get('/:id', async (req, res) => {
    try {
        const foundTrack = await Track.findById(req.params.id);

        if (!foundTrack) {
            return res.status(404).json({ error: 'Track not found' });
        }

        res.status(200).json(foundTrack);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



// UPDATE - PUT /tracks/:id 

router.put("/:id", async (req, res) => {
    try {
        const updatedTrack = await Track.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedTrack) {
            return res.status(404).json({ error: 'Track not found' });
        }

        res.status(200).json(updatedTrack);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



// DELETE - DELETE /tracks/:id

router.delete('/:id', async (req, res) => {
    try {
        const deletedTrack = await Track.findByIdAndDelete(req.params.id);

        if (!deletedTrack) {
            return res.status(404).json({ error: 'Track not found' });
        }

        res.status(200).json(deletedTrack);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});








module.exports = router;