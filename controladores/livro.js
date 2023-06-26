import { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletarLivro } from "../servicos/livro.js"

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) { // NaN é naturalmente falso
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send("ID inválido")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body
        
        if(req.body.nome) {
            insereLivro(livroNovo)
            res.status(201)
            res.send("Livro inserido com sucesso")
        } else {
            res.send(422)
            res.send("O campo nome é obrigatório")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id
        const body = req.body

        if (id && Number(id)) {
            modificaLivro(body, id)
            res.send("Item modificado com sucesso")
        } else {
            res.status(422)
            res.send("ID Inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res){
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deletarLivro(id)
            res.send("Item deletado com sucesso")
        } else {
            res.status(422)
            res.sen("ID Inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}