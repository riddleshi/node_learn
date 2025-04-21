const express = require('express');
const app = express();
app.set ('view engine','ejs')
app.get('/', (req, res) => {
    console.log(req.url)
    res.render('index');
});
app.get('/about.ejs', (req, res) => {
    console.log(req.url)
    res.render('about');
});
app.get('/contact-me.ejs', (req, res) => {
    console.log(req.url)
    res.render('contact-me');
});
app.get('/index.ejs', (req, res) => {
    console.log(req.url)
    res.render('index');
});
app.use((req, res) => {
    console.log(req.url)
    res.render('404');
});
app.listen(8080);