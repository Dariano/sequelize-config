const app = require('./config/express')
const config = require('./config/db')['dev']
const configServer = require('./config/config-server')

app.listen(3001, async () => {
    console.log('Servidor rodando na porta 3001')

    let db = await configServer.buscar()    
    config.username = db.username
    config.password = db.password

    const models = require('./db/models')(config)
    console.log('models.sequelize.config', models.sequelize.config)
    
    models.sequelize.sync().then(() => console.log('Sincronizado!!!!'))
})    
