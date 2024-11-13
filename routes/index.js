require('dotenv').config();
var express = require('express');
var router = express.Router();
const API_key = process.env.API_key;

router.get('/movies', (req,res)=> {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}`)
    .then(response =>response.json())
    .then(data => {
        const movies = data.results
        res.json({movies})
    })
})


module.exports = router;
