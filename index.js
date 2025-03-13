import express from 'express'
const app=express()
const PORT=3000
import mongoose from 'mongoose'
const MongoDB_URL='mongodb+srv://gajapathi787:rYhGUYFE0TC4FddJ@cluster0.0rp0k.mongodb.net/sample_mflix'



await mongoose.connect(MongoDB_URL)
.then(()=>{
    console.log("DB Connected")
})

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


app.post('/person', (req, res) => {
    console.log(req.body);
    res.send('Hi da Mapla Person Added Ah');
  });












app.get('/api/products',(req,res=>{
    const products=[
        {id:1,name:"Laptop",price:1000},
        {id:2,name:"Mobile",price:10001}
    ]
    res.statusCode(200).json({products})
}))










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



/*ExpressJS - Database
( MongoDB & Mongoose )

MongoDB - MongoDB is a popular, open-source, NoSQL database that stores data in a flexible, JSON-like format called BSON (Binary JSON).

1.Document-Oriented
2.High Performance
3.Flexible Schema
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It makes it easier to interact with and manipulate MongoDB documents in a more structured way.


1.Schema-Based
2.Validation
3.Middleware
4.Built-In Methods











The content from the image appears to describe HTTP status codes in the 2xx success category, specifically focusing on:

  1.200 OK: The request was successful, and the server has sent back the requested data (typically for GET requests).

  2.201 Created: The resource was successfully created (commonly used for POST requests).

  3.204 No Content: The request was successful, but there’s no data to return (commonly used for DELETE or PUT requests).



4xx (Client Errors):
    1.400 Bad Request: The server cannot process the request due to invalid syntax.
    2.401 Unauthorized: The request lacks valid authentication credentials.
    3.403 Forbidden: The server understood the request but refuses to authorize it.
    4.404 Not Found: The requested resource was not found on the server.


5xx (server Errors):

1.500 Internal Server Error: A generic error message when the server encounters an unexpected condition.
2.502 Bad Gateway: The server received an invalid response from an upstream server.
3.503 Service Unavailable: The server is currently unavailable, often due to being overloaded or down for maintenance.






Directory Structure:
/project-root
├── /src                   # Source code directory
│   ├── /routes            # API routes
│   ├── /controllers       # Handles request logic
│   ├── /models            # Database models
│   ├── /middlewares       # Custom middlewares
│   ├── /config            # Configuration files
│   ├── /utils             # Helper functions
├── /public                # Static assets (CSS, images)
├── /views                 # Views (if using templating engine)
├── /node_modules          # Dependencies
├── .env                   # Environment variables
├── package.json           # Project metadata & dependencies
├── server.js              # Entry point


*/