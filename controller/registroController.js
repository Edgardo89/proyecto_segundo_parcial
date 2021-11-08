import con from '../database/connection.js'

import {obtener} from '../model/categorymodel.js'

var categorias = []

// midelware conexion con base de datos
export const categoryRegistration = async (req, res) => {
    const {nombre, descripcion} = req.body

    const data = {
        nombre      : nombre,
        descripcion : descripcion
    }

    // console.log(data);

    

    con.query('INSERT INTO categoria SET ?', data, (err,result) => {
        if(err){
            console.log('Ocurrio un error al insertar el registro');
            return
        }
        res.redirect('/')
    })
}

export const productRegistration = async (req, res) => {
    const {nombre, precio, cantidad, descripcion} = req.body

    const data = {
        nombre      : nombre,
        precio      : precio,
        cantidad    : cantidad,
        descripcion : descripcion
    }

    // console.log(data);

    

    con.query('INSERT INTO categoria SET ?', data, (err,result) => {
        if(err){
            console.log('Ocurrio un error al insertar el registro');
            return
        }
        res.redirect('/')
    })
}

export const cargarDatos = function(req, res) {
    categorias.obtener(con, function(err, datos) {
        console.log(datos);
        res.render('inventarioCategorias')
    })
    
}



// export const deleteCategory = (req, res) => {
//     const{id} = req.body

//     const data = {
//         id : id
//     }

//     con.destroy()
// }

// var value = document.getElementById("categoria").value;

// console.log(value);

