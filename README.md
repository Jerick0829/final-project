
# Task Manager App README


## Project Overview
The Task Manager App is a full-stack web application built using the MERN stack, designed to simplify personal task management. With an intuitive interface, users can securely manage their tasks and user profiles, showcasing full CRUD functionality paired with JWT authentication.

## Features
- User Authentication: Secure signup and login functionality with JWT.
- Task CRUD Operations: Users can create, read, update, and delete tasks.
- Personalized Dashboard: Each user can view and manage their tasks on a customized dashboard.
- MongoDB Integration: Tasks and user profiles are stored in MongoDB for persistent, scalable data storage.

## Installation Steps
1. **Clone the repository**:
   ```
   git clone 
   cd task-manager-app
   ```
2. **Install backend dependencies**:
   ```
   npm install
   ```
3. **Install frontend dependencies**:
   ```
   cd client
   npm install
   ```
4. **Run the backend server**:
   ```
   cd ..
   npm start
   ```
5. **Run the frontend React app**:
   ```
   cd client
   npm start
   ```

The app will be available at `http://localhost:3000`.

## API Documentation

### Auth Endpoints

#### `POST /api/users/register`
Registers a new user.

- **Body**: `{ "username": "string", "password": "string" }`
- **Response**: `201 Created`, user object with JWT token

#### `POST /api/users/login`
Authenticates a user and returns a token.

- **Body**: `{ "username": "string", "password": "string" }`
- **Response**: `200 OK`, user object with JWT token

### Task Endpoints

#### `GET /api/tasks`
Returns a list of tasks for the authenticated user.

- **Headers**: `Authorization: Bearer <JWT Token>`
- **Response**: `200 OK`, array of task objects

#### `POST /api/tasks`
Creates a new task for the authenticated user.

- **Headers**: `Authorization: Bearer <JWT Token>`
- **Body**: `{ "title": "string", "completed": "boolean" }`
- **Response**: `201 Created`, created task object

#### `PUT /api/tasks/:taskId`
Updates a specific task by ID.

- **Headers**: `Authorization: Bearer <JWT Token>`
- **Body**: `{ "title": "string", "completed": "boolean" }`
- **Response**: `200 OK`, updated task object

#### `DELETE /api/tasks/:taskId`
Deletes a specific task by ID.

- **Headers**: `Authorization: Bearer <JWT Token>`
- **Response**: `200 OK`, deleted task object

## Support
For support, email us at support@taskmanagerapp.com or open an issue in the GitHub repository.

## Acknowledgments
Thank you for using Task Manager App. We're dedicated to continuously improving the platform and adding new features. Stay tuned for updates!

Happy task managing!
Jerick Siemeon