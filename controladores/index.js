import { getIndex } from "../servicos/index.js"

function controllerIndex(req, res) {
    try {
        const index = getIndex()
        res.send(index)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export {
    controllerIndex
}