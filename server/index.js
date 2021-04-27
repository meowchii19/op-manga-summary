
const  express = require('express')
const app = express();
const port = 5000;
const cors = require ('cors')
const fetch = require('node-fetch')

app.use(cors())

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/chapters/', (req, res) => {
    fetch('https://onepiececover.com/api/chapters/')
    .then(res => res.json())
    .then( body => res.send(body))
    
})

app.listen(port, () => console.log(`listen at port ${port} `))
