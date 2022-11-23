const http = require('http')
const fs = require('fs')

const delay = (ms) => {
   return new Promise((resolve, reject) => {
      setTimeout(() =>{
         resolve()
      }, ms)
   })
}

const readFile = (path) => {
   return new Promise((res, rej) => {
      fs.readFile(path, (err, data) => {
         if (err) rej(err)
         else res(data)
      })
   })
}

const server = http.createServer(async (requrest, response) => {
   switch(requrest.url){
      case '/home': {
         try {
           const data = await readFile('pages/about.html')
           response.write(data)
           response.end()
         } catch (err) {
            response.write('something wrong, 500')
            response.end()
         }
        break;
      }
      case '/about':{
         await delay(3000)
         response.write('about')
         response.end()
         break
      }
      default:
         response.write('404 not found')
         response.end()
   }
})

server.listen(3003)

fetch('http://localhost:5000/api/images/1', {method: 'GET'})
fetch('http://localhost:5000/api/images/1', {method: 'DELETET'})
fetch('http://localhost:5000/api/images/1', {method: 'POST'})
fetch('http://localhost:5000/api/images/1', {method: 'PUT'})
fetch('http://localhost:5000/api/images/1', {method: 'PATCH'})

fetch('http://localhost:5000/api/images/?author=fowler&year=2022limit=100&sort=title', {method: 'PATCH'})
fetch('http://localhost:5000/api/images/1', {method: 'POST', body: JSON.stringify({title: 'JS - Samurai Way', author: 'Dimych'}),headers:{"Content-type":"application/json"}})
fetch('http://localhost:5000/api/images/1', {method: 'PUT', body: JSON.stringify({title: 'JS - Samurai Way', author: 'Dimych', year: 2022})})
fetch('http://localhost:5000/api/images/1', {method: 'PATCH', body: {year: 2022}})
