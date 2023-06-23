import express from "express"
import rotaLivro from "./routes/livro.js"

const app = express()
app.use(express.json())

const port = 8099

app.use('/livros', rotaLivro)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})