const express = require('express')
const router = express.Router();

//Routes

router.get('', (req, res) => {
    var locals = {
        title: 'EJS BLOG',
        description: 'Blog creado utilizando Nodejs, express y mongodb'
    };
    res.render("index", { locals })
})
router.get('/about', (req, res) => {
    var locals = {
        title: 'About',
        description: 'informacion sobre el sitio'
    };
    res.render("about", { locals })
})

module.exports = router