const express = require('express');
const dotenv = require("dotenv").config();
const { Deta } = require('deta');
var app = express()

// application setup
const deta = Deta(process.env.PROJECT_KEY);

//-Connect / Create a database--
const news_db = deta.Base('news_db');
//------------------------------

const new_db_setup = async (response, username, password) => {
    news_db.insert({
        title,
        linked_img,
        
    }, username)
        .then(() => response.redirect("/auth/login"))
        .catch(err => console.error(err));
}


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

app.get('/new_news', (req, res) => {
	


});

app.post('/get_lost_form', (req, res) => {



});


app.listen(8000, function (){
	console.log('Listening to PORT 8000');
});