

import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let todoItems = [];

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/add-item", (req, res) => {
    todoItems.push(req.body["item"]);
    const todo = {items: todoItems};
    res.render("index.ejs", todo);
});

app.listen(port, () => {});