const http = require('http')

let requestCount = 0

const server = http.createServer((requrest, response) => {
   requestCount++

   switch(requrest.url){
      case '/students':
         response.write('STUDENTS')
         break;
      case '/':
      case '/courses':
         response.write('FRONT + BACK')
         break;
      default:
         response.write('404 not found')

   }
   response.write('IT-KAMASUTRA' + requestCount)
   response.end()
})

server.listen(3003)