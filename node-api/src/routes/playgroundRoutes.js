const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/playground:
 *   get:
 *     summary: Test playground endpoint (mainly used to test features or check if the api is up)
 *     responses:
 *       200:
 *         description: Playground response (can change depending on what i'm currently working on)
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Playground
 */
router.get('/', (req, res) => {
  res.send('Playground');
});

module.exports = router;