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

This process underpins the communication between the **Frontend** and **Backend** systems.
