const express = require('express');
const { response } = require("express");
const dotenv = require("dotenv").config();
var bodyParser = require("body-parser");
const { Deta } = require('deta');
var app = express()

//import database from db.js

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const { new_news, new_lost_form, new_tutoring, new_vid, return_news, return_lost_form } = require("./db.js");

app.use(express.static("."));
app.engine('html', mustacheExpress());

app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/views/index.html`);
});

app.get('/home', (req, res) => {
	res.sendFile(`${__dirname}/views/index.html`);
});

app.get('/lost_found',(req, res) => {

	res.render(`${__dirname}/views/lost_found.html`, {lost_found_data:lost_found_data});

});



app.get('/entertainment',(req, res) =>{

	res.sendFile(`${__dirname}/views/entertainment.html`);

});

app.get('/new_form', (req, res) => {

	res.sendFile(`${__dirname}/views/new_form.html`);

});

app.get('/new_found_form', (req, res) => {

	res.sendFile(`${__dirname}/views/new_found_form.html`);

});

app.get('/tutoring',(req, res) => {

	res.sendFile(`${__dirname}/views/tutoring.html`);

});

app.get('/news', (req, res) => {

	res.sendFile(`${__dirname}/views/news.html`);

});

app.get('/upload_vid', (req, res) => {

	res.sendFile(`${__dirname}/views/upload_vid.html`);

});

app.get('/posting_news', (req, res) => {

	res.sendFile(`${__dirname}/views/posting_news.html`);

});

app.get('/get_lost_form', (req, res) => {

	

});

app.post('/new_news', (req, res) => {
	
	const news_title = req.body.newsTitle;
	const image = req.body.image;
	const writing = req.body.writing;

	new_news (res, news_title, image, writing);
});

app.post('/new_vid', (req, res) => {

	const title = req.body.vid_title;
	const link = req.body.vid_link;

	new_vid (res, title, link);

});

app.post('/tutoring_request', (req, res) => {

	const name = req.body.student_name;
	const grade = req.body.student_grade;
	const email = req.body.email;
	const course = req.body.course;
	const note = req.body.note;

	new_tutoring ( res, name, grade, email, course, note );

});

app.post('/get_lost_data', (req, res) => {
	// var lost_item_data = req.body

	// console.log(req.body);

	// res.send()
	const description = req.body.description;
	const student_name = req.body.student_name;
	const grade = req.body.grade;
	const email = req.body.email;
	const img = req.body.img;

	new_lost_form (res, description, student_name, grade, email, img);
});

app.get('/return_news', (req, res) => {


	let returned = return_news();


	returned.then(function(data){

		console.log(data);
		res.send(data);
	});

});

app.get('/return_lost_form', (req, res) => {

	let returned = return_lost_form();

	returned.then(function(data){
		res.send(data);
	});

});




app.listen(8000, function (){
	console.log('Listening to PORT 8000');
});