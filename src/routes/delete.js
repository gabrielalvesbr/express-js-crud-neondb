import app from "../app.js";
import sql from "../config/database.js";

// Exclui um usuário pelo ID
app.delete('/delete/:id', async (req, res) => {
    const id = Number(req.params.id);

    try {
        await sql`
            DELETE FROM users WHERE id = ${id}
        `

        console.log('User deleted');

        res.json(
            {message: "User deleted"}
        );

    } catch (error) {
        console.log('delete error: ', error)

        res.status(500).json({
            message: "Error delete user"
        });
    } 

});