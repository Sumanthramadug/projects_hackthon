const express = require('express');
const bodyParser = require('body-parser');
const path  = require('path');
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use("/public", express.static(__dirname + "/public"));

app.get("/",async (req,res)=>{
    res.render("login");
}
);

app.get("/home",async (req,res)=>{
    res.render("home");
}
);

app.post("/login",async (req,res)=>{
    console.log(req.body);
    res.json({message:"Registration successful"});
})


app.listen(8000, () => {
    console.log('Server is running on port 6000');
});