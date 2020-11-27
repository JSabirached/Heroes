let heroes = require ('../data/heroes.json')

module.exports = {
    mostrarJSON : function (req, res){
        res.send (heroes)
    },
    detalle : function (req, res){
        let heroe = heroes.filter(heroe => {
            return heroe.id == req.params.id
        });
        
        if(heroe[0] == undefined){
            res.send('Heroe no encontrado')
        }else{
            res.send(`Hola, mi nombre es ${heroe[0].nombre} y soy ${heroe[0].profesion}`)
        }
    }
}