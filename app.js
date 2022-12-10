const express = require("express");
const ejs = require("ejs");
const app     = express();
const port = process.env.PORT || 3000;
const err = "Opps! page not found";


app.use(express.static("public"));
app.set("view engine", "ejs");



app.get("/", (req, res)=> {
    res.render("home")
});


app.get("/about", (req, res)=> {
    res.render("about");
});


app.get("/weather", (req, res)=> {
    res.render("weather");
});

app.get("*", (req, res)=> {
    res.render("404error", {error:err});
})

app.listen(port, () => {
    console.log(`My server is running on port ${port}`);
})