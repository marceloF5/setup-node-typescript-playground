import express from 'express'

const app = express()

app.listen(3333, () => console.log('Server Started'))

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})
