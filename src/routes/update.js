import app from "../app.js";

app.put('/update', (req, res) => {
    res.json({"message" : "route update"})
})