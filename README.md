<img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/df7eac147767277.62c848d68fa9d.gif" alt="logotype" width="100%"/>

# Feedback Collection System 📋✨

Welcome to the Feedback Collection System! This project is built using the MERN stack (MongoDB, Express, React, Node.js) and allows users to submit various types of feedback. Administrators have the ability to view all submitted feedback.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contributors](#contributors)

## Features ✨

- **Multi-Type Feedback Forms**: Users can submit different types of feedback such as suggestions, user feedback, and queries.
- **User Roles**: Two types of users - Normal Users (who can submit feedback) and Admins (who can view all feedback).
- **Authentication**: User Authentication using JWT.
- **RESTful API**: Backend built with Express.js to handle feedback data.
- **Modern Frontend**: Frontend built with React.js to provide a dynamic and responsive user experience.
- **Database**: MongoDB is used to store feedback data.

## Installation 🛠️

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js
- MongoDB
- Mongoose

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/khushi-0807/FeedbackRecallingSystem.git
    ```
2. Navigate to the `backend` directory:
    ```bash
    cd feedback-collection-system/backend
    ```
3. Install backend dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the `backend` directory and add your MongoDB connection string:
    ```env
    MONGO_URI=**************************
    ```
5. Start the backend server:
    ```bash
    npm run dev
    ```
    The backend server will run on port 5000.

### Frontend Setup

1. Navigate to the root project directory:
    ```bash
    cd ../
    ```
2. Install frontend dependencies:
    ```bash
    npm install
    ```
3. Start the frontend server:
    ```bash
    npm start
    ```
    The frontend server will run on port 3000.

## Usage 🚀

### For Normal Users

- Access the application via `http://localhost:3000`.
- Select the type of feedback you want to submit (Suggestion, User Feedback, Query, etc.).
- Fill out the feedback form and submit.

### For Admins

- Access the admin dashboard via `http://localhost:3000/admin`.
- View all submitted feedback in a consolidated view.

## Project Structure 🗂️

```
feedback-collection-system/
├── backend/
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── app.js
│ └── server.js
├── public/
├── src/
│ ├── components/
│ ├── pages/
│ ├── App.js
│ ├── index.js
├── .env
├── package.json
└── README.md

```

## API Endpoints 🌐

### Feedback Endpoints

- **POST /api/feedback**: Submit feedback
- **GET /api/feedback**: Get all feedback (Admin only)

### User Endpoints

- **POST /api/users/login**: Login user

## Technologies Used 💻

- **Frontend**: React.js, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT

## Contributing 🤝

Contributions are welcome! Please fork this repository and submit a pull request.

## License 📄

This project is licensed under the MIT License.

## Contributors 👥

- Rohit Tanwar
- Aryam
- Hritik

---

Made with ❤️ by Khushi Mishra    #Zidio Development
