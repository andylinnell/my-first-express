import express from "express"

const app = express() 
app.use(express.json()) // tells app that it can use json

let instructors = ['jiho','todd']

app.post('/instructors', (req,res) => {
    // take an array of new instructors and merge with existing
    const newInstructors = req.body.instructors
    instructors = [...instructors, ...newInstructors] // combining two arrays
    res.send(instructors)
})


// now we need to l ist some valid requests
app.get('/test', (request, response) => {  // usually abbreviate request and response req and res
    console.log('test request made.') // would only send to server and would not display in app
    response.send('😀 our API frickin works! 😀') // have to respond.send to actually get a return
})

app.get('/instructors', (request, response) => { 
    response.json(instructors)                 // response.json is same as response.send but sends formatted
})

app.get('/secure', (request,response) => {         // creates /secure where users arent authorzied
    // no users are allowed here
    response.status(401).send('Not Authorized.')
})





// post
app.post('/students', (req, res) => { // req and res shortened from request and response
    // we need to handle the post request (body)
    const newStudent = req.body
    console.log(newStudent)
    res.send(newStudent)
})


app.listen(3030, () => {
    console.log('Listening on http://localhost:3030...')
})