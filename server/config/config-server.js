const request = require('axios')

class  ConfigServer {
    
    async buscar() {
      const response = await request.get('https://dog.ceo/api/breeds/image/random');
      await console.log(`Configuração ====> ${ response.data.status }`)
      return await response.data.status;
    }
}

module.exports =  new ConfigServer()
