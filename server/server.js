const express = require('express');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
const cors = require('cors');
const zip = require('express-zip');

// Connect to MongoDB
mongoose.connect('mongodb+srv://koushikadakka2004:Emosort2004@logindatabase.f1qljez.mongodb.net/FileSeeker?retryWrites=true&w=majority');

const app = express();
app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

const FileSchema = new mongoose.Schema({
    uniqueCode: String,
    files: [
        {
            path: String,
            originalName: String,
            relativePath: String,
        }
    ],
});

const FileModel = mongoose.model('File', FileSchema);

app.post('/upload', upload.array('files'), async (req, res) => {
    const files = req.files.map((file, index) => ({
        path: file.path,
        originalName: file.originalname,
        relativePath: req.body.paths[index],
    }));
    const uniqueCode = uuidv4();

    const newFileEntry = new FileModel({
        uniqueCode,
        files,
    });

    await newFileEntry.save();

    res.json({ uniqueCode });
});

app.post('/download', async (req, res) => {
    const { uniqueCode } = req.body;

    const fileEntry = await FileModel.findOne({ uniqueCode });

    if (!fileEntry) {
        return res.status(404).json({ error: 'Invalid code' });
    }

    const files = fileEntry.files.map(file => ({
        path: file.path,
        name: file.relativePath,
    }));

    res.zip(files, `${uniqueCode}.zip`);
});

app.listen(5000, () => {
    console.log('Server started on http://localhost:5000');
});
