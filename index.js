var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

/* var campeones = [{
    nombre: 'Ahri',
    sobrenombre: 'La Vastaya de Nueve Colas',
    rol: 'Ráfaga',
    atributo: 'A distancia',
    lanzamiento: '14/12/2011',
}]; */

var campeones = [];

app.get('/', function(req, res){
    res.send("Petición aceptada.");
});

app.listen(8888, function(){
    console.log("Servidor activo");
});

//Crear un campeón
app.post('/campeones', function(req, res){
    let campeon = {
        nombre: req.body.nombre,
        sobrenombre: req.body.sobrenombre,
        rol: req.body.rol,
        atributo: req.body.atributo,
        lanzamiento: req.body.lanzamiento,             
    }

    campeones.push(campeon);
    res.send({codigoMostrar:1, mensaje:'Registro exitoso.', campeonRegistrado:campeon});
});

//Obtener un campeón
app.get('/campeones/:id', function(req, res){
    if(req.params.id > (campeones.length-1))
        res.send({codigoMostrar: 0, mensaje:"Campeón inexistente"});
    else
        res.send(campeones[req.params.id]);
});

//Obtener todos los campeones
app.get('/campeones', function(req, res){
    res.send(campeones);
});


//Actualizar campeón
app.put('/campeones/:id', function(req, res){
    let campeon = {
        nombre: req.body.nombre,
        sobrenombre: req.body.sobrenombre,
        rol: req.body.rol,
        atributo: req.body.atributo,
        lanzamiento: req.body.lanzamiento,             
    }

    campeones[req.params.id] = campeon;
    res.send({codigoMostrar:1, mensaje: "Usuario actualizado"});
});

//Eliminar un usuario
app.delete('/campeones/:id', function(req, res){
    usuarios.splice(req.params.id, 1);
    res.send({codigoMostrar: 1, mensaje: "Usuario eliminado"});
});
