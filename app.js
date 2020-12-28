const express = require('express');
const app = express();

const PORT = process.env.PORT || 8877;

app.get('/about', (req, res)=> {
    res.json({
        name: 'Diogo',
        email: 'diogobh93@gmail.com',
    })
})

app.listen(PORT, ()=> {
    console.log('Escutando na porta: '+ PORT);
})