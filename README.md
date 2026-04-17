# School Management API

A simple REST API built with **Node.js**, **Express**, and **MySQL** to manage school data and fetch schools based on location (latitude & longitude).

---

## Features

* Add new schools
* Get list of schools
* Sort schools by distance (using latitude & longitude)
* MySQL database integration
* Deployed backend support (Render + Railway)

---

## Project Structure

```
SCHOOL-MANAGEMENT-API/
│── api/                 # API logic (controllers)
│── config/              # Database configuration
│── routes/              # API routes
│── .env                 # Environment variables
│── createTable.js       # Table creation script
│── server.js            # Main server file
│── package.json
```

---

## Installation

### 1. Clone the repository

```
git clone https://github.com/Darshil122/School-Management-API
cd SCHOOL-MANAGEMENT-API
```

### 2. Install dependencies

```
npm install
```

### 3. Setup environment variables

Create a `.env` file and add:

```
DATABASE_URL=your_mysql_public_url
```

---

## Database Setup

If using Railway MySQL:

* Copy `MYSQL_PUBLIC_URL`
* Paste into `.env` as `DATABASE_URL`

---

##  Run Project

### Development (with nodemon)

```
npm start
```

---

## API Endpoints

### Add School

**POST** `/api/school/addSchool`

#### Request Body:

```json
{
  "name": "ABC School",
  "address": "City Area",
  "latitude": 22.9,
  "longitude": 72.5
}
```

---

### Get Schools (sorted by distance)

**GET** `/api/school/listSchools?latitude=22.9&longitude=72.5`

#### Response:

```json
[
  {
    "id": 1,
    "name": "School Name",
    "address": "Address",
    "latitude": 22.9,
    "longitude": 72.5,
    "distance": 10.5
  }
]
```

---

## Deployment

### Backend:

* Deploy using Render

### Database:

* Use Railway MySQL
* Use `MYSQL_PUBLIC_URL` for connection

---


## Tech Stack

* Node.js
* Express.js
* MySQL (mysql2)
* dotenv
* nodemon

---

## Author

Darshil Dabhi

---

## License

MIT License
