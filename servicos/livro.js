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
    const novaListaDeLivros = [ ...livros, livroNovo ]

    fs.writeFileSync("livros.json", JSON.stringify())
}

function modificaLivro(modificacoes, id) {
    const indiceModificado = livros.findIndex( livro => livro.id === id)

    const conteudoMudado = { ...livros[indiceModificado],  ...modificacoes}
    // livros[indiceModificado] -> {id:"2", nome: "livro irado"}
    // modificações -> {nome: "nome mucho legal"}

    
}

export {
    getTodosLivros,
    getLivroPorId,
    insereLivro
}