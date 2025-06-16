import app from './app.js'

const port = 3001;
app.listen(port, ()=>{
  console.log()
  console.log(`Executando na porta ${port}`)
  console.log(`CTRL + clique em http://localhost:${port}`)
});
