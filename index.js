import express from 'express'
const app=express()
const PORT=3000

//Define a simple route

app.get('/',(req,res)=>{
    res.send("Hi  ahh")
})

//middleware
app.use(express.json())

//Dynamic Url Routing

app.get('/user/:user_name',(req,res)=>{
    const user_name=req.params.user_name;
    res.send(`Hi da ${user_name} login ahh `)
})


app.post('/users',(req,res)=>{
    const {name,email}=req.body;
    res.json({
        message:`User ${name} with email ${email} creted successfully`
    })
})

app.put('/users/:id',(req,res)=>{
    const userId=req.params.id
    const {name,email}=req.body
    res.json({
        message:`User ${userId} updated to ${name},${email}`
    })
})

app.delete('/users/:id',(req,res)=>{
    const userId=req.params.id
   res.json({
    message:`User with ID ${userId} deleted successfully `
   })
})

app.get('/product/:name/:id',(req,res)=>{
    const {name,id}=req.params
    res.json({
        id,
        name
    })
})








app.listen(PORT,()=>{
    console.log(`server is runnning ${PORT} `);
    
})















// Interview Question



// HTTP Methods in ExpressJS
// ========================

// ExpressJS supports various HTTP methods to handle different types of 
// client requests. The most commonly used methods in RESTful APIs are:

// • GET
// • POST
// • PUT
// • DELETE

// Handling a GET Request
// ====================
// • Used to fetch data from the server.
// • Parameters can be passed using route parameters or query strings.

// Handling a POST Request
// ====================
// • Used to send data to the server and create a new resource.
// • Requires middleware (express.json()) to handle JSON input.



// Handling a PUT Request -- (update)
// ====================
// • The PUT method is used to update an existing resource.resource.
// • The resource's ID is typically passed as a route parameter (:id).
// • The updated data is sent in the request body and parsed using express.json() middleware.



// Handling a DELETE Request
// ====================
// • UThe DELETE method is used to remove a resource.
// • The resource's ID is passed as a route parameter (:id).





// Types of Middleware in ExpressJS
// ===============================

// 1. Application-Level Middleware
//    Description: Applies to all routes in an app
//    Example: app.use(loggerMiddleware)

// 2. Router-Level Middleware
//    Description: Applies to specific route groups
//    Example: router.use(authMiddleware)

// 3. Built-in Middleware
//    Description: Comes with Express (e.g., express.json())
//    Example: app.use(express.json())

// 4. Third-Party Middleware
//    Description: External libraries for additional functionality
//    Example: app.use(cors())

// 5. Error-Handling Middleware
//    Description: Handles errors in the request lifecycle
//    Example: app.use(errorHandler)