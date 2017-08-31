const express = require('express')
const app = express()
const config = require('./config/db')['dev']
const configServer = require('./config/config-server')


app.listen(3001, async () => {
    let db = await configServer.buscar()    
    config.db = db

    console.log('Servidor rodando na porta 3001', db)
    
    const models = require('./db/models')
    models.sequelize.sync().then(() => console.log('Sincronizado!!!!'))
})    
