const express = require('express');
const urlController = require('../controllers/urlController');
const router = express.Router();

/**
 * @swagger
 * /{slug}:
 *   get:
 *     summary: Resolve a shortened URL to let the front end redirect to said URL
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: The slug of the shortened URL
 *     responses:
 *       200:
 *         description: Original URL found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 originalUrl:
 *                   type: string
 *       404:
 *         description: URL not found
 */
router.get('/:slug', urlController.getUrl);

/**
 * @swagger
 * /:
 *   post:
 *     summary: Create a shortened URL and return a slug of said URL
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - originalUrl
 *             properties:
 *               originalUrl:
 *                 type: string
 *                 example: https://www.example.com
 *     responses:
 *       201:
 *         description: URL shortened successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 shortUrl:
 *                   type: string
 *                 slug:
 *                   type: string
 *       500:
 *         description: Server error
 */
router.post('/', urlController.postUrl);

module.exports = router;