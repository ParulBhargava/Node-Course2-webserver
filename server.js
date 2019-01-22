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

app.get('/home', (req, res) => {
    res.render('home.hbs', {
        pageTitle:'Home Page',
        headerTitle:'Welcome to home page'
    });
    
    // res.send("Home",{
    //     error:"Not connected"
    // });
});

app.get('/projects', (req,res)=>{
    res.render('projects.hbs',{
        pageTitle:'My Project Case Studies',
        headerTitle:'Welcome to my Profile page'
    });
});

app.get('/about', (req,res)=>{
    res.render('about.hbs',{
        pageTitle:'About Page',
        headerTitle:'Welcome to About page'
    });
});

app.listen(port, ()=>{
    console.log(`Server is now running on port ${port}`);
});
