const express = require('express')
const axios = require('axios')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({defaultLayout: 'main'})

app.engine('handlebars', hbs.engine)

app.set('view engine', 'handlebars')

app.get('/pokemon/:name', async (req, res) => {
    try{
        const {name} = req.params
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const pokemon = response.data;

        res.render('pokemon', {pokemon})

    }catch(e){
        res.send(404).render('error', {message: "Hmmmm, algo de errado ein! Pokemon não encontrado!"})
    }
})

const PORT = 3000;
app.listen(PORT, ()=> {console.log("Servidor rodando!")})