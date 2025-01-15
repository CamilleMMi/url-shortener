const Url = require('../models/urlModel');
const asyncHandler = require('express-async-handler');

const getUrl = asyncHandler(async(req, res) => {
    const { slug } = req.params;

    if (!slug) {
        res.status(400);
        throw new Error('Slug parameter is required');
    }

    const url = await Url.findOne({ slug });

    if (!url) {
        res.status(404);
        throw new Error('URL not found');
    }

    url.lastUse = Date.now();
    url.clickCount += 1;
    await url.save();

    res.status(200).json({
        originalUrl: url.originalUrl
    });
});

const postUrl = asyncHandler(async(req, res) => {
    try {
        const { originalUrl } = req.body;

        const url = new Url({
            originalUrl
        });

        await url.generateSlug();
        await url.save();

        res.status(201).json({
            message: 'URL shortened successfully',
            shortUrl: url.shortUrl,
            slug: url.slug,
        });
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

module.exports = {
    getUrl,
    postUrl
}