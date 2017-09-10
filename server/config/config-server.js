const request = require('axios')

class  ConfigServer {    
    async buscar() {
      const response = await request.get('https://dog.ceo/api/breeds/image/random')
      
      await console.log(`Configuração ====> ${ response.data.status }`)
      
      return {
        password: '123456',
        username: 'teste'
      }
    }
}

module.exports =  new ConfigServer()
