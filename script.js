
// document.ready(function(){
//                  (".cat_card").click(function(){
//                      (".section").load("list-page.html");
//                  });
//             });


// document.addEventListener('DOMContentLoaded', function(){
//   const cards = document.querySelectorAll(".cat_card");
//   for (card of cards){
//   	card.addEventListener('click', function() {
//   		document.querySelector(".section").innerHTML = "list-page.html";
//   	});
//   }
// });


// const express = require('express');
// const app = express();
// const path = require('path');
// // const router = express.Router();

// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname+'/project.html'));
// });

// app.get('/list-page',function(req,res){
//   res.sendFile(path.join(__dirname+'/list-page.html'));
// });
// // app.use(express.static());
// app.listen(process.env.port || 3000);

// console.log('Running at Port 3000');



const books_list = [{name:'The Picture of Dorian Gray', author:'Oscar Wilde', image_url:'images/books/dorian-gray.jpg', price: 12.99},{name:'Hamlet', author:'William Shakespeare', image_url:'images/books/hamlet.jpg', price:9.99}, {name:'Jane Eyre', author:'Charlotte Bronte', image_url:'images/books/jane-eyre.jpg', price:13.00}];

const descs = [{name:'The Picture Of Dorian Gray', desc:''}, {name:'Hamlet', desc:''}, {name:'Jane Eyre', desc:''}]