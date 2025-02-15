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

### Backend Development with JavaScript

#### Setting Up the Environment

We utilize **npm** (Node Package Manager) for managing packages in our backend projects.

- Check Node.js and npm Installation

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

#### Building Server-Side Applications with Node.js and Express.js

When creating server-side applications with Node.js, a widely used framework is `Express.js`

- Adding Dependencies

The `dependencies` section in the `package.json` file lists all the packages your project relies on. Adding Express.js as a dependency ensures that anyone downloading your project can install the required packages using `npm install`

- To install Express.js, run:

```bash
npm install express
```

All installed packages are stored in the `node_modules` folder.

Use scripts to get your server up and running (for example: "dev") and then we can tell `npm` to run that script. In this case `npm run dev`

To restart our server automatically on changes, use `nodemon` (dev dependency)

The `public` directory in a project is where static assets like HTML files, images, and other resources are served directly to the client without processing.

#### Node.js + Express + TypeScript Setup Guide

Project setup

- TypeScript Configuration (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "resolveJsonModule": true,
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"]
}
```

Depending on how you configure `package.json`, you must adjust import statements accordingly.

- Default (CommonJS-like Behavior)

  - package.json (No "type": "module" specified)
  - Import style
    ```typescript
    import authRoutes from "./routes/authRoutes";
    ```
  - Dev Command
    ```bash
    nodemon --exec ts-node src/index.ts
    ```

When using `__dirname` and `__filename`

- To use

  ```typescript
  import path from "path";
  import { fileURLToPath } from "url";

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  ```

- Add "type": "module" `in package.json`

- Update imports to include file extensions, like:

  ```typescript
  import authRoutes from "./routes/authRoutes.js";
  ```

- Change the dev command to:

  ```bash
  npx tsx npx tsx --watch src/index.ts
  ```

Migrations are used for version control of a database, they are essentially records of all the modifications made to a db and when you run these migrations, every instance of your db gets updated to reflect these changes. Keeps your db schema in sync with your prisma schema.

Docker is used to containerize application and create a set of instructions for this container (virtual environment) that can be consistently across all systems.

The Docker file is an instruction sheet on how we can create an environment so that it has everything it needs to run our project.

We would also require a config sheet to boot up all these docker environments -> `docker-compose.yaml` file

#### Backend Docker Setup Guide

This guide will walk you through setting up the **backend Todo app** using **Docker, PostgreSQL, and Prisma**.

---

- Install Docker

Make sure you have **Docker Desktop** installed before proceeding.

- [Download Docker Desktop](https://www.docker.com/products/docker-desktop/)

---

- Clone the Repository

```bash
git clone https://github.com/your-username/backend-todo-app.git
cd backend-todo-app
```

- Generate the Prisma Client

```bash
npx prisma generate
```

- Build Docker Images

```bash
docker compose build
```

- Create and Apply PostgreSQL Migrations

```bash
docker compose run app npx prisma migrate dev --name init
```

- If migrations need to be applied later

```bash
docker compose run app npx prisma migrate deploy
```

Boot Up Docker Containers

- To start the application with 2 containers

```bash
docker compose up
```

- To run it in the background

```bash
docker compose up -d
```

Running in detached mode (-d) means it won’t lock your terminal. You’ll need to stop it via Docker Desktop or `docker compose down`.

Access the PostgreSQL Database

- While containers are running, open a new terminal and run

```bash
docker exec -it postgres-db psql -U postgres -d my-app
```

This lets you interact with the database using SQL commands.

Stopping Docker Containers

```bash
docker compose down
```

Delete All Docker Containers

```bash
docker system prune
```

Once everything is running, open:
`http://localhost:8000` (or `localhost:3000` if changed)

You can register, log in, and manage your app from there.

#### Docker commands:

Container Management

- List running containers

```bash
docker ps
```

- List all containers

```bash
docker ps -a
```

- Stop a runnning container

```bash
docker stop <container_id>
```

- Start a stopped container

```bash
docker start <container_id>
```

- Restart a container

```bash
docker restart <container_id>
```

- Remove a container

```bash
docker rm <container_id>
```

Image Management

- List all downloaded images

```bash
docker images
```

- Remove an image

```bash
docker rmi <image_id>
```

- Download an image from Docker Hub

```bash
docker pull <image_name>
```

- Build an image from a Dockerfile

```bash
docker build -t <image_name>
```

Docker Compose

- Start all services in `docker-compose.yaml`

```bash
docker compose up
```

- Rebuild images before starting services

```bash
docker compose up --build
```

- Start services in detached mode (background)

```bash
docker compose up -d
```

- Stop and remove all containers

```bash
docker compose down
```

- View real-time logs of all services

```bash
docker compose logs -f
```

Volumes & Networks

- List all volumes

```bash
docker volume ls
```

- Remove a volume

```bash
docker volume rm <volume_name>
```

- List all networks

```bash
docker network ls
```

- Remove a network

```bash
docker network rm <network_name>
```

Install & Debug

- View logs od a container

```bash
docker logs <container_id>
```

- Open a shell inside a running container

```bash
docker exec -it <container_id> sh
```

- Get detailed info about a container

```bash
docker inspect <container_id>
```

- Show resource usage of running containers

```bash
docker stats
```

Cleanup

- Remove unused container, images, and networks

```bash
docker system prune
```

- Remove unused volumes

```bash
docker volume prune
```

- Remove unused networks

```bash
docker network prune
```

- Remove unused images

```bash
docker image prune
```
