import app from './app.js'

const port = 3001;

app.listen(port, ()=>{
  console.log()
  console.log(`API running in the port:${port}`)
  console.log(`CTRL + click in http://localhost:${port}`)
});
