import fs from "fs"

const livros = JSON.parse( fs.readFileSync("livros.json") )

function getTodosLivros() {
    return livros
}

function getLivroPorId(id) {
    const livroFiltrado = livros.filter(livro => livro.id === id)[0]
    return livroFiltrado
}

function insereLivro(livroNovo) {
    const checarNomeRepetido = livros.filter(livro => livro.nome === livroNovo.nome)
    if (checarNomeRepetido.length > 0) {
        throw new Error("Esse Livro já existe no banco de dados")
    }
    livroNovo.id = Math.max(...livros.map(livro => livro.id)) + 1 // incrementa sempre +1 no tamanho do index
    const novaListaDeLivros = [ ...livros, livroNovo ]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id) {
    const indiceModificado = livros.findIndex( livro => livro.id === id)
    const conteudoMudado = { ...livros[indiceModificado],  ...modificacoes} // dar uma olhada nessa função (...) depois
    // livros[indiceModificado] -> {id:"2", nome: "livro irado"}
    // modificações -> {nome: "nome mucho legal"}

    livros[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livros))
    
}

function deletarLivro(id) {
    delete livros[livros.findIndex( livro => livro.id === id)]

    fs.writeFileSync("livros.json", JSON.stringify(livros))
}

export {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletarLivro
}