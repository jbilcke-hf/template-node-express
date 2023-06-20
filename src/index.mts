import express from 'express'

const app = express()
const port = 7860
app.use(express.static('public'))
app.get('/', async (req, res) => {
  res.write(`<html><head><title>Hello.</title></head><body><div>Hello world</div></body></html>`)
  res.end()
})
app.listen(port, () => { console.log(`Open http://localhost:${port}`) })