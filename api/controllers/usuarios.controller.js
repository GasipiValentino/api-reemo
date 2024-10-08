import * as service from "../../services/usuarios.service.js"

export function getUsuarios(req,res){
    const usuario = req.query
    service.getUsuarios(usuario)
        .then( (usuarios) => res.status(200).json(usuarios) )
}

export function agregarUsuario(req, res){
    const usuario = req.body
    service.agregarUsuario(usuario)
        .then( (usuario) => res.status(201).json(usuario) )
        .catch( () => res.status(404).json({ mensaje: "No se pudo agregar" }) )
}

export function borrarUsuario(req, res){
    const id = req.params.id
    service.borrarUsuario(id)
        .then( (usuario) => res.status(201).json(usuario) )
        .catch( () => res.status(404).json({mensaje: "No se pudo eliminar el usuario"}) )
}

export function agregarAlHistorial(req, res){
    const usuario = req.params.idUsuario
    const vehiculo = req.body
    console.log("LLEGUE", usuario)
    service.agregarAlHistorial(usuario, vehiculo)
        .then( usuario => res.status(201).json(usuario) )
        .catch( () => res.status(404).json({ mensaje: "No se pudo agregar a carrito" }) )
}