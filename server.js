const express = require('express');
<<<<<<< HEAD
const dotenv = require("dotenv").config();
var bodyParser = require("body-parser");
const { Deta } = require('deta');
=======
>>>>>>> f1d8cc72d754430a3c6cb41f76f1d4e4ae70993f
var app = express()

//import database from db.js
const { new_news, new_lost_form, new_tutoring, new_vid } = require("./db.js");


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

app.post('/new_news', (req, res) => {
	
	const news_title = req.body.news_title;
	const image = req.body.image;
	const writing = req.body.writing;

	new_news (req, news_title, image, writing);
});



app.post('/tutoring_request', (req, res) => {

	const name = req.body.name;
	const grade = req.body.grade;
	const email = req.body.email;
	const subject = req.body.subject;
	const note = req.body.note;

	new_tutoring { req, name, grade, email, subject, note };

});

app.post('/get_lost_data', (req, res) => {
	// var lost_item_data = req.body

	// console.log(req.body);

	// res.send()
	const item_name = req.body.item;
	const name = req.body.name;
	const grade = req.body.grade;
	const email = req.body.email;
	const description = req.body.description;

	new_lost_form (req, item_name, name, grade, email, description);
});


app.listen(8000, function (){
	console.log('Listening to PORT 8000');
});