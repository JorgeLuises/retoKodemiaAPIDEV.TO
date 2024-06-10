# REST API simulation for the dev.to web "version 1"
## Reto de backend Kodemia JS. 33

This is the final repository, Result of the  [Kodemia](kodemia.mx) challenge of the backend module.

This repo represents a simulation of a REST API for the dev.to web.

Below you´ll find the manual to run this API from your computer.

## How to run?
1. Install dependencies
```
To install all dependencies for this API you´ll need to execute command: "npm install" follwed by the next dependecies:

-http-errors
-json web token (JWT)
-mongoose
-express
-bcryptjs
-dotenv
```
2. Create an ".env" file
```
Execute command touch .env

Inside of this file, you must create some variables for your server. In "example.env" file, you´ll find an example about how to create these variables.
```
3. Run modes
```
If you want to run the API in dev mode, execute command "npm run dev"

If you wnat to run the API in production mode, execute command "npm start"