const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Minh la Thai', message: 'Hello there!' })
})

module.exports = router;
