import express from "express"
import rotaIndex from "./routes/index.js"
import rotaLivro from "./routes/livro.js"

const app = express()
app.use(express.json())

const port = 3000

app.use('/', rotaIndex)
app.use('/livros', rotaLivro)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})