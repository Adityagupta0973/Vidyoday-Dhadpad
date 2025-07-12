const express = require('express');
const mongoose = require('mongoose');
const { GridFsStorage } = require('multer-gridfs-storage');
const multer = require('multer');
const { Readable } = require('stream');

const router = express.Router();
require('dotenv').config();
// MongoDB URI
const mongoURI = process.env.MONGO_URI;

// Create mongo connection
const conn = mongoose.createConnection(mongoURI, {});

let gfs;
conn.once('open', () => {
    gfs = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'resources',
    });
});

// Storage engine
const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return {
            filename: file.originalname,
            bucketName: 'resources',
        };
    },
});
const upload = multer({ storage });

// @route POST /resources/upload
// @desc  Uploads file to DB
router.post('/upload', upload.single('file'), (req, res) => {
    res.json({ file: req.file });
});

// @route GET /resources/:filename
// @desc  Download file by filename
router.get('/:filename', async (req, res) => {
    try {
        const file = await conn.db.collection('resources.files').findOne({ filename: req.params.filename });
        if (!file) return res.status(404).json({ err: 'File not found' });

        const readStream = gfs.openDownloadStreamByName(req.params.filename);
        res.set('Content-Type', file.contentType);
        readStream.pipe(res);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

// @route DELETE /resources/:id
// @desc  Delete file by id
router.delete('/:id', async (req, res) => {
    try {
        await gfs.delete(new mongoose.Types.ObjectId(req.params.id));
        res.json({ success: true });
    } catch (err) {
        res.status(404).json({ err: 'File not found' });
    }
});
/**
 * @route GET /resources/videos
 * @desc  Fetch all video files
 */
router.get('/videos', async (req, res) => {
    try {
        const files = await conn.db.collection('resources.files').find({ 'contentType': { $regex: '^video/' } }).toArray();
        res.json(files);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});
module.exports = router;