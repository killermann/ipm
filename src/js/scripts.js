//@prepros-prepend plugins/lozad.min.js

/* LazyLoad */

const observer = lozad('.lazy-load'); // lazy loads elements with default selector as '.lozad'
observer.observe();

/* Main Nav */

function toggleMenu() {
    // Cache the hidden menu, toggle the class
    document.getElementById('explore-menu').classList.toggle('visible');
    document.body.classList.toggle('no-scroll');
    button.classList.toggle('active');
}

var button = document.getElementById('explore-button');

if (button){
    button.addEventListener('click', toggleMenu);
}

/* Social Share Buttons */

function showShareMenu() {
    document.getElementById('share-buttons').classList.toggle('visible');
}

var shareButton = document.getElementById('share');

if (shareButton) {
    shareButton.addEventListener('click', showShareMenu);
}

var shareCount = document.getElementById('share-count');

if (shareCount) {
    shareCount.addEventListener('click', showShareMenu);
}

/*******************************/
/*          IPM Score          */
/*******************************/

var score = localStorage.getItem('ipm_score');
 
if (score === null) {
    score = 1;
}

document.getElementById('ipm-score').innerHTML = score; /* scoreboard */

function incrementScore() {
    score++;
    localStorage.setItem("ipm_score", score);
}

window.onload = setTimeout(incrementScore, 7000); /* 7 seconds on a page = 1 point */

var getBonusPointClickers = document.getElementsByClassName("bonus-point");

for (var i = 0; i < getBonusPointClickers.length; i++) {
    getBonusPointClickers[i].addEventListener('click', incrementScore, false);
}

/*******************************/
/*  New Content Notifications  */
/*******************************/

/* Articles */

var articlesCount = localStorage.getItem('articles_count');

if (articlesCount !== null) {
    var grabCurrent = document.getElementById('count-articles').innerHTML;
    if (grabCurrent > articlesCount){
        document.getElementById('new-articles').innerHTML = grabCurrent - articlesCount; 
        document.getElementById('new-articles').classList.remove('hide');
    } 
} else { localStorage.setItem('articles_count', document.getElementById('count-articles').innerHTML); }

function articlesCountUpdate() { localStorage.setItem('articles_count', document.getElementById('count-articles').innerHTML); }

document.getElementById('nav-articles').addEventListener('click', articlesCountUpdate);

/* Edugraphics */

var edugraphicsCount = localStorage.getItem('edugraphics_count');

if (edugraphicsCount !== null) {
    var grabCurrent = document.getElementById('count-edugraphics').innerHTML;
    if (grabCurrent > edugraphicsCount){
        document.getElementById('new-edugraphics').innerHTML = grabCurrent - edugraphicsCount; 
        document.getElementById('new-edugraphics').classList.remove('hide');
    } 
} else { localStorage.setItem('edugraphics_count', document.getElementById('count-edugraphics').innerHTML);}

function edugraphicsCountUpdate() { localStorage.setItem('edugraphics_count', document.getElementById('count-edugraphics').innerHTML);}

document.getElementById('nav-edugraphics').addEventListener('click', edugraphicsCountUpdate);

/* Books */

var booksCount = localStorage.getItem('books_count');

if (booksCount !== null) {
    var grabCurrent = document.getElementById('count-books').innerHTML;
    if (grabCurrent > booksCount){
        document.getElementById('new-books').innerHTML = grabCurrent - booksCount; 
        document.getElementById('new-books').classList.remove('hide');
    } 
} else {localStorage.setItem('books_count', document.getElementById('count-books').innerHTML);}

function booksCountUpdate() { localStorage.setItem('books_count', document.getElementById('count-books').innerHTML);}
document.getElementById('nav-books').addEventListener('click', booksCountUpdate);

/* Videos */

var videosCount = localStorage.getItem('videos_count');

if (videosCount !== null) {
    var grabCurrent = document.getElementById('count-videos').innerHTML;
    if (grabCurrent > videosCount){
        document.getElementById('new-videos').innerHTML = grabCurrent - videosCount; 
        document.getElementById('new-videos').classList.remove('hide');
    } 
} else { localStorage.setItem('videos_count', document.getElementById('count-videos').innerHTML);}

function videosCountUpdate() { localStorage.setItem('videos_count', document.getElementById('count-videos').innerHTML);}
document.getElementById('nav-videos').addEventListener('click', videosCountUpdate);

/* Courses */

var coursesCount = localStorage.getItem('courses_count');

if (coursesCount !== null) {
    var grabCurrent = document.getElementById('count-courses').innerHTML;
    if (grabCurrent > coursesCount){
        document.getElementById('new-courses').innerHTML = grabCurrent - coursesCount; 
        document.getElementById('new-courses').classList.remove('hide');
    } 
} else { localStorage.setItem('courses_count', document.getElementById('count-courses').innerHTML);}

function coursesCountUpdate() { localStorage.setItem('courses_count', document.getElementById('count-courses').innerHTML);}
document.getElementById('nav-online-courses').addEventListener('click', coursesCountUpdate);

/* News */

var newsCount = localStorage.getItem('news_count');

if (newsCount !== null) {
    var grabCurrent = document.getElementById('count-news').innerHTML;
    if (grabCurrent > newsCount){
        document.getElementById('new-news').innerHTML = grabCurrent - newsCount; 
        document.getElementById('new-news').classList.remove('hide');
    } 
} else { localStorage.setItem('news_count', document.getElementById('count-news').innerHTML);}

function newsCountUpdate() { localStorage.setItem('news_count', document.getElementById('count-news').innerHTML);}
document.getElementById('nav-news').addEventListener('click', newsCountUpdate);