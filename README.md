# School Management API

A RESTful API built using **Node.js, Express, and MySQL** to manage school data.
This system allows users to **add schools** and **retrieve a list of schools sorted by proximity** to a given location.

---

## Features

* Add new schools
* Fetch schools sorted by distance (nearest first)
* Uses latitude & longitude for distance calculation
* Auto-reload with Nodemon

---

## Tech Stack

* Node.js
* Express.js
* MySQL (`mysql2`)
* dotenv
* CORS

---

## Project Structure

```
SCHOOL-MANAGEMENT-API/
│
├── api/                # Controllers / logic
├── config/             # Database configuration
├── routes/             # API routes
├── createTable.js      # Script to create DB table
├── server.js           # Entry point
├── .env                # Environment variables
├── package.json
└── README.md
```

---

## Setup Instructions

### Clone the repository

```
git clone https://github.com/Darshil122/School-Management-API
cd SCHOOL-MANAGEMENT-API
```

---

### Install dependencies

```
npm install
```

---

### Setup environment variables

Create a `.env` file in root:

```
DB_HOST=your_host
DB_USER=your_username
DB_PASS=your_password
DB_NAME=your_database_name
```

---

### Create database table

Run once:

```
node createTable.js
```

---

### Start server

```
npm start
```

---

## API Endpoints

---

### Add School

* **Endpoint:** `/api/school/addSchool`
* **Method:** `POST`
* **Body:**

```json
{
  "name": "D.A.V. International School",
  "address": "Makarba, Ahmedabad, Gujarat 380051",
  "latitude": 22.9973,
  "longitude": 72.5003
}
```

---

### List Schools (Sorted by Distance)

* **Endpoint:** `/api/school/listSchools`

* **Method:** `GET`

* **Query Params:**

```
latitude=22.9973
longitude=72.5003
```

* **Example:**

```
http://localhost:3000/api/school/listSchools?latitude=23.7&longitude=74.5
```

---

## Distance Calculation

The API uses the **Haversine formula** to calculate the distance between user location and schools.

---

## Future Improvements

* Authentication (JWT)
* Pagination
* Input validation (Joi)
* Deployment (Render / Railway)
* Frontend with map visualization

---

## License

This project is licensed under the MIT License.

---

## Author

Developed as part of a Node.js practical project.
