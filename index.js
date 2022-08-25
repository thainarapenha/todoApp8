import express from 'express';
const app = express();
app.use(express.json());

const bdDicas = []

app.get('/dicas', function (_, res) {
  const dica = bdDicas[Math.floor(Math.random() * bdDicas.length)]
  if(!dica){
    return res.status(404).send('Não temos nenhuma dica para vc no momento :/')
  }else{
    res.send(dica)
  }
})

app.post('/create', (req, res) => {
    const darDica = {
      dica: req.body.dica
    }
    bdDicas.push(darDica)
    res.json(bdDicas)
})

const porta = process.env.PORT || 3000;
app.listen(porta, console.log(`Código está rodando na porta ${porta}`))