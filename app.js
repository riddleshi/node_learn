const express = require('express');
const app = express();
app.set ('view engine','ejs')
app.get('/', (req, res) => {
    console.log(req.params)
    res.render('index');
});
/*app.post("/messages",(req, res) => {
    console.log(req.url)
    res.send("This is where you can see any messages.");
});*/
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