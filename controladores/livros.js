function getLivros(req, res) {
    try {
        res.send('Olá,   Nice API GET')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export {
    getLivros
}