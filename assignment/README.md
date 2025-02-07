Backend Assignment - Microservices with Node.js, Redis & MongoDB

This project demonstrates a microservices architecture using Node.js, Redis (Pub/Sub), and MongoDB. It includes:

- Receiver Service - API to accept user data & publish events to Redis.
- Listener Service - Listens for events & updates MongoDB with modified_at.
- Redis - Used as a Pub/Sub message broker.
- MongoDB - Stores user data.
- Dockerized & Scalable - Runs with Docker Compose.

Prerequisites
Ensure you have the following installed on your machine:

- Node.js (v16+)
- Docker & Docker Compose
- Postman (for API testing)

Clone the repository
- git clone <repo-url> user_microservices
- cd assignment

Start all services with Docker
- docker-compose up --build

This will start:

- receiver-service on localhost:3000
- listener-service as a background process
- mongo on port 27017
- redis on port 6379

API Usage (Receiver Service)

Create a New User

curl -X POST http://localhost:3000/receiver \
  -H "Content-Type: application/json" \
  -d '{"user": "Harry", "class": "Comics", "age": 22, "email": "harry@potter.com"}'

Response (User is saved & event published to Redis)

{
    "id": "b74bd9c2-8590-4149-9628-3f738099831a",
    "user": "Harry",
    "class": "Comics",
    "age": 22,
    "email": "harry@potter.com",
    "inserted_at": "2024-03-25T12:00:00+05:30"
}


How the Listener Service Works

- It automatically runs in the background when you start docker-compose up.
- It listens to Redis for user_created events.
- When a new user is created, it copies the data and adds a modified_at timestamp.

Check Listener Logs
- docker logs listener-service

Expected Output

User processed: {
  "id": "b74bd9c2-8590-4149-9628-3f738099831a",
  "user": "Harry",
  "class": "Comics",
  "age": 22,
  "email": "harry@potter.com",
  "inserted_at": "2024-03-25T12:00:00+05:30",
  "modified_at": "2024-03-25T12:01:00+05:30"
}


To stop the running containers, use:

- docker-compose down






