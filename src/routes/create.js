import app from "../app.js";
import sql from "../config/database.js";

// Cria um novo usuário no banco de dados
app.post('/create', async (req, res) => {

    const { name } = req.body;

    try {
        await sql`
            INSERT INTO users (name)
            VALUES (${name})
        `
        console.log('user added');
        
        res.json(
            {message: "User created"}
        );

    } catch (error) {
        console.log('post error: ', error)

        res.status(500).json({
            message: "Error creating user"
        });
    }

});