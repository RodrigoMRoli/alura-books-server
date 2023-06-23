import { Router } from 'express'
import { getLivros } from '../controladores/livros.js'

const router = Router()

router.get('/', getLivros)

router.post('/', (req, res) => {
    res.send('Olá, Nice API POST')
})

router.patch('/', (req, res) => {
    res.send('Olá, Nice API PATCH')
})

router.delete('/', (req, res) => {
    res.send('Olá, Nice API DELETE')
})

export default router