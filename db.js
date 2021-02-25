// import required dependencies
const dotenv = require("dotenv").config();
const { Deta } = require("deta");
const { response } = require("express");

// application setup
const deta = Deta(process.env.PROJECT_KEY);

//-Connect / Create a database--
const news_db = deta.Base('news_db');
//------------------------------

const new_news = async (response, username, password) => {
    news_db.insert({
        title,
        linked_img,
        linked_writing
    }, username)
        .then(() => response.redirect("/auth/login"))
        .catch(err => console.error(err));
}

const new_vid = async (response, username, password) => {
    news_db.insert({
    	title,
        vid_link
    }, username)
        .then(() => response.redirect("/auth/login"))
        .catch(err => console.error(err));
}


const new_lost_form = async (response, username, password) => {
    news_db.insert({
        item,
        name,
        grade,
        email,
        description
    }, username)
        .then(() => response.redirect("/auth/login"))
        .catch(err => console.error(err));
}

const new_tutoring = async (response, username, password) => {
    news_db.insert({
        name,
        grade,
        email,
        subject,
        note
    }, username)
        .then(() => response.redirect("/auth/login"))
        .catch(err => console.error(err));
}

// export
module.exports = {
    new_news,
    new_lost_form,
    new_tutoring,
    new_vid
}

