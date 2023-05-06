import express from 'express'
const app = express()
app.get('/bienvenida', (req, res) => {
      res.send('<h1 style="color: red">Bienvenidos</h1>')
    })
    app.get('/usuario', (req, res) => {
          res.json({ nombre: 'Jose', apellido: 'Herrera', edad: 32, correo: 'correo@gmail.com' })
        })
        
        app.listen(8080, () => console.log('Server on '))
