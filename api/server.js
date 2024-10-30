const express = require ('express')
const cors = require ('cors')
const PORT = process.env.PORT || 3000;
const app = express()
const path = require('path')
app.use(cors())
app.use(express.static(path.join(__dirname, '../')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})
app.get('/random-key', (req, res) => {
    let numeros = []
    while (numeros.length < 5) {
        let numero = Math.floor(Math.random() * 50) + 1
        if (!numeros.includes(numero)) {
            numeros.push(numero)
        }
    }

    let estrelas = []
    while (estrelas.length < 2) {
        let estrela = Math.floor(Math.random() * 12) + 1
        if (!estrelas.includes(estrela)) {
            estrelas.push(estrela)
        }
    }

    numeros.sort((a, b) => a - b)
    estrelas.sort((a, b) => a - b)

    res.json({ numeros, estrelas })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


