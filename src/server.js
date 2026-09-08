import express from 'express'
import 'dotenv/config'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json({message: "api running"})
})

app.listen(process.env.PORT, () => {
    console.log('server running')
})
