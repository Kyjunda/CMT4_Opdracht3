// mogelijkheden van de module express van de variabele express koppelen
let express = require('express');
let path = require('path');

// webapllicatie aanmaken van het type express
let app = express();

// applicatiepoort instellen
let port = 5000;

//aan de applicatie vertellen dat we werken met views
app.set("views", path.resolve(__dirname, 'views'));
//werken met ejs
app.set("view engine", "ejs");
// inhoude op het scherm plaatsen

// databestand inladen
let art = require('./data/werken.json');

// fotos inladen
app.use( express.static( "public" ) );

// route naar "homepagina" laten werken
app.get('/gallery', function(req,res){
  res.render('paintings', {
    // Array van blogberichten doorgeven aan de renderfunctie om op de homepagina te tonen.
    posts: art.werken
  });
});

// detailpagina van een blogbericht
app.get('/werken/:postid', function(req,res){
  res.render('detail', {
    post: art.werken[req.params.postid]
  });
});

app.get("/contact", function(request, response){
  response.render("contact");
});

app.get("/home", function(request, response){
  response.render('home', {
    // Array van blogberichten doorgeven aan de renderfunctie om op de homepagina te tonen.
    post: art.werken
  });
});

//404 - Catch all
app.use(function(request, response){
  response.statusCode = 404;
  response.send("404 Cannot find");
})
app.set('port', (process.env.PORT || 5000)); 

app.listen(app.get('port'), function() { console.log("luister naar poort: " +port});

console.log("zet schermformaat op iPhone X");