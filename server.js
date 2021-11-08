import './loadEnv.js'   
import express from 'express'

import router from './routes/routes.js'

// Puerto donde se encuentra express
const PORT = 12000

// Aplicacion server de express
const app = express()

// Definir el sistema de vistas a utilizar(plantillas)
app.set('view engine', 'pug')

// Definir la ubicacion de archivos publicos
app.use(express.static('public'))

// Configuracion para procesar los formularios
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// routas
app.use('/', router)

// Escuchando el servidor
app.listen(PORT, () => {
    console.log(`Servidor esta corriendo en ${PORT}`);
})