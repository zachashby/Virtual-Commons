// import required dependencies
const dotenv = require("dotenv").config();
const { Deta } = require("deta");
const { response } = require("express");

// application setup
const deta = Deta(process.env.PROJECT_KEY);

//-Connect / Create a database--
const news_db = deta.Base('news_db');
const lost_db = deta.Base('lost_db');
const vid_db = deta.Base('vid_db');
const tutoring_db = deta.Base('tutoring_db');
//------------------------------

const new_news = async (response, title, linked_img, linked_writing) => {
    news_db.insert({
        title,
        linked_img,
        linked_writing})
        .then(() => response.redirect("/"))
        .catch(err => console.error(err));

}

const new_vid = async (response, title, vid_link) => {
    vid_db.insert({
    	title,
        vid_link
    })
        .then(() => response.redirect("/"))
        .catch(err => console.error(err));
}


const new_lost_form = async (response, item_name, student_name, grade, email, description) => {
    lost_db.insert({
        item_name,
        student_name,
        grade,
        email,
        description})
        .then(() => response.redirect("/"))
        .catch(err => console.error(err));
}

const new_tutoring = async (response, name, grade, email, subject, note) => {
    tutoring_db.insert({
        name,
        grade,
        email,
        subject,
        note})
        .then(() => response.redirect("/"))
        .catch(err => console.error(err));
}

// export
module.exports = {
    new_news,
    new_lost_form,
    new_tutoring,
    new_vid
}

