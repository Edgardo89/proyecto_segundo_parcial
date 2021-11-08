export const obtener = function(conexion, funcion){
    conexion.query("SELECT * FROM categoria", funcion);
}