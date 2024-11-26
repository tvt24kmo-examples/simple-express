const express=require('express');

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/t1',function(request, response){
    console.log("Testi");
    response.send("Testi1");
});

app.get('/t2',function(request, response){
    console.log("Test2");
    response.send("Testi2");
});
//middleware funktio suoritetaan automaattisesti
//sen tunnistaa use sanasta
//middleware funktio voisi esimerkiksi vaatia, että
//käyttäjä on kirjautunut

app.use(function(request, response, next){
    console.log("Middleware");
    next();
});

app.get('/t3/:fname',function(request, response){
    //console.log("Terve "+request.params.fname);
    response.send("Terve "+request.params.fname);
});

app.get('/t4/:fname?',function(request, response){
    if(request.params.fname){
        response.send("Terve "+request.params.fname);
    }
    else {
        response.send("Terve tuntematon");
    }
});

app.post('/t1',function(request, response){
    console.log("Post test");
    response.send(request.body);
});


let port=3000;
app.listen(port, function(err){
    if(err) console.log("virhe");
    console.log("Server kuuuntelee porttia :"+port);
});

module.exports=app;
