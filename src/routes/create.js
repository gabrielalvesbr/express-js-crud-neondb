import app from "../app.js";

app.get('/create', (req, res) => {
    res.json({"message" : "route create"})
})