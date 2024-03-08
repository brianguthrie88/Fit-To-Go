const router = require('express').Router();

router.get('/', (req, res) => res.send('Visit http://localhost:3001/api'));

module.exports = router;