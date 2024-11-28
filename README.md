
# **React-NestJS Chat Application**

A full-stack real-time chat application using **React**, **NestJS**, **TypeORM**, **MySQL**, and **Socket.IO**. The application features secure authentication with **JWT** and a role-based structure, offering APIs for user management and real-time communication via WebSockets.

---
![alt text](https://github.com/ibar09/Chat-App/blob/master/Diag.png?raw=true)
## **Features**

- **Authentication**:  
  Secure login and registration using JWT.
  
- **Real-time Chat**:  
  Live messaging functionality powered by Socket.IO.

- **User Management**:  
  RESTful APIs for creating, updating, and fetching user data.

- **Authorization**:  
  JWT Auth Guard to secure APIs and socket communication.

- **Database**:  
  MySQL database integration via TypeORM for managing users and chat data.

- **Dark Theme**:  
  Clean, modern, and responsive UI with Bootstrap CSS.

---

## **Technologies Used**

### **Frontend**:
- React
- Axios
- Bootstrap (Dark Theme)

### **Backend**:
- NestJS
- TypeORM
- JWT Auth Guard
- Socket.IO

### **Database**:
- MySQL

---

## **Project Architecture**

The application is divided into two parts:

1. **Client**:  
   React application for user interaction with the APIs and WebSocket.

2. **Server**:  
   NestJS server handling:
   - User authentication (`/auth`)
   - User management (`/users`)
   - Real-time communication (`/sockets`)

![Project Architecture Diagram](image.png)

---

## **Setup Instructions**

### Prerequisites
- Node.js (v16+)
- MySQL
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/react-nestjs-chat.git
cd react-nestjs-chat
```

### 2. Backend Setup (NestJS)

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure `.env` file:
   Create a `.env` file in the `server` directory with the following:
   ```env
   DATABASE_HOST=localhost
   DATABASE_PORT=3306
   DATABASE_USER=root
   DATABASE_PASSWORD=yourpassword
   DATABASE_NAME=chat_app
   JWT_SECRET=your_jwt_secret
   ```

4. Run database migrations:
   ```bash
   npm run migration:run
   ```

5. Start the server:
   ```bash
   npm run start:dev
   ```

---

### 3. Frontend Setup (React)

1. Navigate to the `client` directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React application:
   ```bash
   npm start
   ```

The React application will be available at `http://localhost:3000`.

---

## **API Endpoints**

### Authentication
- `POST /api/login`: Logs in a user and returns a JWT.
- `POST /api/register`: Registers a new user.

### User API (JWT Protected)
- `GET /api/users`: Fetches a list of users.

### WebSocket Communication
- Socket.IO connection secured via JWT in the headers.

---

## **Folder Structure**

```
react-nestjs-chat/
├── client/                # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
├── server/                # NestJS Backend
│   ├── src/
│   │   ├── auth/          # Authentication Module
│   │   ├── users/         # User Management Module
│   │   ├── sockets/       # WebSocket Module
│   │   └── main.ts        # Entry point
│   └── package.json
└── README.md              # Project README
```

---

## **How to Use**

### Login and Chat Flow:
1. Start the backend and frontend servers.
2. Open the React app in your browser.
3. Register or log in with valid credentials.
4. Access the chat interface and start messaging in real-time.

---

## **Security Features**

- **JWT Token**: Used for both HTTP requests (via Axios) and WebSocket connections.
- **Guards**: Protected routes and WebSocket events using `JWTAuthGuard`.

---

## **Contributing**

Feel free to fork this repository and contribute! Submit a pull request with any improvements or bug fixes.

---

## **License**

This project is licensed under the MIT License.

---

Let me know if you'd like further customization!
