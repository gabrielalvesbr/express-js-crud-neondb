import app from "../app.js";

app.delete('/delete', (req, res) => {
    res.json({"message" : "route delete"})
})