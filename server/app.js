const express = require('express')
const app = express()
const config = require('../config/config')['dev']
const configServer = require('../config/config-server')


app.listen(3001, async () => {
    let a = await configServer.buscar()    
    config.status = a

    console.log('Servidor rodando na porta 3001', a)
    
    const models = require('../models')
    models.sequelize.sync().then(() => console.log('Sincronizado!!!!'))
})    
