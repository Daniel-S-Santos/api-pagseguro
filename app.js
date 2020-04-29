const app = require("express")()
const axios = require('axios').default
const cors = require('cors')
const x2js = require('x2js')

var convert = new x2js()
var port = process.env.PORT || 3000
// var {Builder, By, Key, } = require('selenium-webdriver')
app.get('/api', (req, res)=>{
res.sendFile(__dirname+ '/index.html')
})
 
// async function example() {
//   let driver = await new Builder().forBrowser('chrome').build();
//   try{
//     await driver.get('http://www.google.com/');
//     await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
//     //await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//   }catch(e){
//     console.log(e)
//   }
// };
// example()
// app.get('/session', (req, res) =>{
//   axios({
//     method: 'post',
//     url: 'https://ws.pagseguro.uol.com.br/v2/sessions',
//     params: {
//         email:'gianmilani@gmail.com',
//         token: '35000a53-0dce-44b8-9ad4-d6ec90ed1d2d0d07fb3d49bd9cc70207c216c7422e7d6fbf-03f9-49e4-aa6a-9f12f2571095'
//     }
// }).then(r => {
  
// var dados = convert.xml2js(r.data)
//     console.log(dados.session.id)
//     res.send(dados.session.id)
// })
// })





// var xhr = new XMLHttpRequest();
// xhr.open("POST", 'https://ws.pagseguro.uol.com.br/v2/sessions', true);

// // Envia a informação do cabeçalho junto com a requisição.
// //xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

// xhr.onreadystatechange = function() { // Chama a função quando o estado mudar.
//     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
//         // Requisição finalizada. Faça o processamento aqui.
//         console.log('deu bom')
//     }
// }

// xhr.send("?email=gianmilani@gmail.com&token=35000a53-0dce-44b8-9ad4-d6ec90ed1d2d0d07fb3d49bd9cc70207c216c7422e7d6fbf-03f9-49e4-aa6a-9f12f2571095");
// console.log(xhr.response)
// xhr.send(new Int8Array()); 
// xhr.send(document);

 app.listen(port)