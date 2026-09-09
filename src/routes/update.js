import app from "../app.js";
import sql from "../config/database.js";

// Atualiza o nome(name) de um usuário pelo ID
app.put('/update/:id', async (req, res) => {
    const id = Number(req.params.id)
    const { name } = req.body

    try {
        await sql`
            UPDATE users SET name = ${name} WHERE id = ${id}
        `

        console.log('User updated');

        res.json(
            {message: "User updated"}
        );

    } catch (error) {
        console.log('update error: ', error)

        res.status(500).json({
            message: "Error updating user"
        });
    }
})