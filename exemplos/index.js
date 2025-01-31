const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.post('/desconto', (req, res) => {
    const { preco } = req.body;
    let desconto = 0;
    if (preco > 1000) {
        desconto = preco * 0.08;
    }
    let precoComDesconto = preco - desconto;
    res.json({ preco, desconto, precoComDesconto });
});

app.post('/salariofamilia', (req, res) => {
    const { salario } = req.body;
    let salariototal = 0;
    filhos = 45;
    if (salario > 2000) {
        const salariofamilia = numfilhos * 45;
        const salarioFinal = salario + salariofamilia;
        res.json({ salariototal: salarioFinal})
    } else {
        res.json({ salarioFinal: salario});
    }
    
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});