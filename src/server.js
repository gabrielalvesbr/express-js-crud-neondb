import 'dotenv/config'
import app from './app.js'
import './routes/create.js'
import './routes/read.js'
import './routes/update.js'
import './routes/delete.js'

app.listen(process.env.PORT, () => {
    console.log('server running')
})