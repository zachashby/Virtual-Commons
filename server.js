const express = require('express');
const dotenv = require("dotenv").config();
var bodyParser = require("body-parser");
const { Deta } = require('deta');
var app = express()

//import database from db.js
const { new_news, new_lost_form, new_tutoring, new_vid } = require("./db.js");

app.use(express.static("."));

app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/views/index.html`);
});

app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/views/lost_found.html`);
});

app.post('/search_lost', (req, res) => {

	const  item_name = req.body.item_name;

	//database stuff 
});


app.get('/home',(req, res) => {

	res.sendFile(`${__dirname}/views/index.html`);

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

	const name = req.body.student_name;
	const grade = req.body.student_grade;
	const email = req.body.email;
	const course = req.body.course;
	const note = req.body.note;

	new_tutoring ( req, name, grade, email, subject, note );

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

      function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(121,49,64,0.9)";
      }

      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        document.body.style.backgroundColor = "#793140";
      }

app.listen(8000, function (){
	console.log('Listening to PORT 8000');
});