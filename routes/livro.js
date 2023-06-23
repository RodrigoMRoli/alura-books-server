import { Router } from 'express'
import { getLivros, getLivro, postLivro } from '../controladores/livro.js'

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/', (req, res) => {
    res.send('Olá, Nice API PATCH')
})

router.delete('/', (req, res) => {
    res.send('Olá, Nice API DELETE')
})

export default router