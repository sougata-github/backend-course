## Backend

Full-stack development encompasses the entire web experience, from typing in a URL to interacting with a webpage.

It primarily consists of two parts:

- **Frontend**
- **Backend**

The **Frontend** is what we see and interact with when we visit a website. It includes the user (us) and the client (browser). The client is the medium through which we access and interact with the internet.

### What happens when we type in a URL?

- The browser sends out a **network request**.

- This request is directed to an address to locate a server (another device) with a specific **IP address** connected to the internet.

- The **URL** (Uniform Resource Locator) is a human-readable address. It is translated into a numerical IP address by the **DNS (Domain Name System)**. For example, the domain `youtube.com` is converted into a series of numbers (`142.250.190.46`).

- The server listens for incoming requests on specific ports. Once the server receives the request, it processes any incoming data and prepares a response, which may involve fetching data from a database or performing some computations.

- The server responds to the browser with the requested data, often in the form of **HTML, CSS, and JavaScript** files, or API responses in formats like **JSON**.

- The browser receives the response, parses the **HTML**, and uses additional resources (CSS, JavaScript) to render and display the webpage to the user.

<!-- Docker is used to containerize application and create a set of instructions for this container (virtual environment) that can be consistently across all systems. -->

### Backend Development with JavaScript

#### Setting Up the Environment

We utilize **npm** (Node Package Manager) for managing packages in our backend projects.

1. **Check Node.js and npm Installation**  
   To verify that Node.js and npm are installed on your system, run the following commands in your terminal:

```bash
node -v
npm -v
```

These commands display the installed versions of Node.js and npm. If they are not installed, download and install them from Node.js official website.

- Initialize the Project

To set up a new Node.js project, use the following command:

```bash
npm init -y
```

The above command initialises node.js backend project. It creates a package.json file which serves as a blueprint for your project, specifying its metadata and dependencies.

### Building Server-Side Applications with Node.js and Express.js

When creating server-side applications with Node.js, a widely used framework is `Express.js`

- Adding Dependencies

The `dependencies` section in the `package.json` file lists all the packages your project relies on. Adding Express.js as a dependency ensures that anyone downloading your project can install the required packages using `npm install`

- To install Express.js, run:

```bash
npm install express
```

All installed packages are stored in the `node_modules` folder.
