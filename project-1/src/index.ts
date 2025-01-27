import express from "express";

//our application, we are invoking express as a function
const app = express();

/*providing a port -> The ip address is the address of the device and the port is a location within the device*/
const PORT = process.env.PORT || "8000";

/*Configuring our app to listen to an incoming request. We can pass the port as an argument to listen, and also a callback function*/
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
