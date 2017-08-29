const request = require('axios')

class  ConfigServer {
    async buscar() {
        return request
            .get('https://dog.ceo/api/breeds/image/random')
            .then((res) => {
                console.log('configuração ==============>', res.data.status)
                return res.data.status
            })

    }
}

module.exports =  new ConfigServer()