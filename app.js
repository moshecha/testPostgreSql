const express = require('express')
const app = express()

const User = require('./models/User')


app.get('/',async (req, res) =>  {


    const mike = await User.create({
          email: "sskt@example.comee"+Date.now(),
          fullName: "dav Smithee",
          age: 302,
          employed: true,
        });
        const users = await User.findAll().then(data=>{
            res.json(data)
        })


    //res.send('¡Hola mundo!');
 });


 app.listen(3000, () =>
 console.log('Servidor corriendo','http://localhost:3000/')
);
