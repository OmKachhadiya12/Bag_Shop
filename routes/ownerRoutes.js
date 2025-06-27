const express = require('express');
const router = express.Router();

router.get('/',()=>{
    res.send('Its working');
})

module.exports = router;