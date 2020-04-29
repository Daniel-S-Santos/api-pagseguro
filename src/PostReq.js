// const axios = require('axios').default
// const x2js = require('x2js')
// var convert = new x2js()

function crazy() {
    const response = axios({
        method: 'post',
        url: 'https://ws.pagseguro.uol.com.br/v2/sessions',
        data: convert.xml2js(data),        
        params: {
            email:'gianmilani@gmail.com',
            token: '35000a53-0dce-44b8-9ad4-d6ec90ed1d2d0d07fb3d49bd9cc70207c216c7422e7d6fbf-03f9-49e4-aa6a-9f12f2571095'
        }
    }).then(r => {
        const lol = convert.xml2js(r.data)

        console.log(lol.session.id)
    })
console.log('lol')
}


module.exports = crazy