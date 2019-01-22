const express = require ("express");
const hbs= require("hbs");

const port=process.env.PORT || 4000;

var app = express();
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');

hbs.registerHelper('currentYear', ()=>{
    return new Date().getFullYear();
})
app.use(express.static(__dirname+'/public'));

app.get('/home', (req,res)=>{
    res.render('home.hbs',{
        pageTitle:'Home Page',
        headerTitle:'Welcome to home page'
    });
    // res.send({
    //     error:"Not connected"
    // });
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
