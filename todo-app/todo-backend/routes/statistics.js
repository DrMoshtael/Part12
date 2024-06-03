const express = require('express');
const router = express.Router();
const { getAsync } = require('../redis')

router.get('/', async (_req, res) => {
    const todos = await getAsync("added_todos")
    res.json({
        "added_todos": todos
    })
})

module.exports = router;