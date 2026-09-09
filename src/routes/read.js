import app from "../app.js";
import sql from "../config/database.js";

app.get('/', async (req, res) => {
    
    try {
        const users = await sql`SELECT * FROM users`

        console.log('users data')

        res.json(users)

    } catch (error) {
        console.log('read error: ', error)

        res.status(500).json({
            message: "Error reading users"
        });
    } 

})