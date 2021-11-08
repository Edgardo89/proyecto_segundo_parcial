import express from 'express'
import {categoryRegistration, productRegistration, cargarDatos} from '../controller/registroController.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})
router.get('/registerCategory', (req, res) => {
    res.render('registerCategory')
})
router.get('/registerProduct', (req, res) => {
    res.render('registerProduct')
})
router.get('/inventarioCate',(req, res) => {
    res.render('inventarioCategorias', {cargarDatos: cargarDatos})
})

router.post('/registerCategory', categoryRegistration)
router.post('/registerProduct', productRegistration)
// router.get('/inventarioCate', categoris)

export default router