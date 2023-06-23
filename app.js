import express from "express"
import rotaLivro from "./routes/livro.js"

const app = express()

const port = 8082

app.use('/livros', rotaLivro)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})