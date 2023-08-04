import express from "express"
import cors from 'cors'
import rotaIndex from "./routes/index.js"
import rotaLivro from "./routes/livro.js"

const app = express()
app.use(express.json())

const port = 30025

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,PATCH,DELETE');
    app.use(cors());
    next();
});

app.use('/', rotaIndex)
app.use('/livros', rotaLivro)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})