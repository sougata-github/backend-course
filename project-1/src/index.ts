import express from "express";

//our application, we are invoking express as a function
const app = express();

/*providing a port -> The ip address is the address of the device and the port is a location within the device*/
const PORT = process.env.PORT || "8000";

/*
We need to configure our server to interpret these incoming requests -> HTTP Verbs && Routes

verb -> GET
Route -> "/"

Verb + Route -> Endpoint
*/

//first argument is the route to handle incoming get requests and then we define the logic using a callback fn.

/*The method informs the nature of request and the route is a further subdirectory (basically we direct the request to the body of code to respond apprporiately, and these locations are called routes or endpoints)*/

app.get("/", (req, res) => {
  console.log(req.method);

  //sending a response with a status code of 200
  res.sendStatus(200);
});

app.get("/dashboard", (req, res) => {
  console.log(req.method);
  res.status(200).send("<h1>Hello Dashboard</h1>");
});

/*Configuring our app to listen to an incoming request. We can pass the port as an argument to listen, and also a callback fn. Right now this server that's connected to the internet has an address that we can send network requests to. The address of this server connected to the network is: http://localhost:8000 (url). This is the local network for development.
 */

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});

/*Status code represent the outcome of the initial request. Any response with 200 level is successful.*/
