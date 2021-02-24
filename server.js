const express = require('express');
const dotenv = require("dotenv").config();
const { Deta } = require('deta');
var app = express()

app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/views/index.html`);
});

app.post('/search_lost', (req, res) => {

	const  item_name = req.body.item_name;

	//database stuff 
});

app.get('/lost_found',(req, res) => {

	res.sendFile(`${__dirname}/views/lost_found.html`);

});

app.get('/entertainment',(req, res) =>{

	res.sendFile(`${__dirname}/views/entertainment.html`);

});

app.get('/new_form', (req, res) => {

	res.sendFile(`${__dirname}/views/new_form.html`);

});

app.get('/tutoring',(req, res) => {

	res.sendFile(`${__dirname}/views/tutoring.html`);

});

app.get('/news', (req, res) => {

	res.sendFile(`${__dirname}/views/news.html`);

});


app.listen(8000, function (){
	console.log('Listening to PORT 8000');
});