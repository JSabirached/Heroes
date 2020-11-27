const express =require('express');
const router =express.Router();
const heroesController = require ('../controller.js/heroesController')
// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
/* app.get('/heroes', (req,res) => {
	res.send(heroes);
}); */
router.get('/',heroesController.mostrarJSON)
router.get('/detalle/:id', heroesController.detalle)

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get('/heroes/bio/:id/:ok?', (req, res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe = heroes.filter(heroe => {
		return heroe.id == req.params.id
	});
	if(heroe[0] == undefined){
		res.send('No encontramos un héroe para mostrarte su biografía')
	}else if(req.params.ok){
		res.send(`
		Héroe: ${heroe[0].nombre}\n
		 || Reseña: ${heroe[0].resenia}`)
	}else{
		res.send(`${heroe[0].nombre} dice: Lamento que no quieras saber más de mí :(`)
	}
	// Si NO se encuentra al héroe se envía un mensaje
	// Si se encuentra al héroe:
		// Se pregunta si vino el parámetro Y el valor esperado y se envía la información
		// Si nó vino el parámetro se envía el mensaje de error
	
});



module.exports= router
