# Daily-Task-Backend-CRUD-

# Notes Backend API

A simple Node.js backend application for managing notes using Express.js and MongoDB with Mongoose.

## Features

- Create, read, update, and delete (CRUD) notes
- RESTful API endpoints
- MongoDB database integration
- Express.js server setup

## API Endpoints

### Create a Note
- **POST** `/notes`
- Body: `{ "title": "string", "description": "string" }`
- Response: `{ "message": "Note Created" }`

### Get All Notes
- **GET** `/notes`
- Response: `{ "message": "Notes Fetched Successfully", "notes": [...] }`

### Delete a Note
- **DELETE** `/notes/:id`
- Response: `{ "message": "Notes Deleted Successfully" }`

### Update a Note
- **PATCH** `/notes/:id`
- Body: `{ "description": "string" }`
- Response: `{ "message": "Note Updated Successfully" }`

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up MongoDB:
   - Ensure MongoDB is running locally or update the connection string in `src/db/db.js` for your MongoDB instance.

4. Start the server:
   ```
   node server.js
   ```

The server will run on `http://localhost:3000`.

## Project Structure

```
├── package.json
├── server.js
├── src/
│   ├── app.js
│   ├── db/
│   │   └── db.js
│   └── models/
│       └── note.model.js
└── README.md
```

- `server.js`: Entry point of the application
- `src/app.js`: Express application with API routes
- `src/db/db.js`: Database connection setup
- `src/models/note.model.js`: Mongoose model for notes

## Dependencies

- Express.js: Web framework for Node.js
- MongoDB: NoSQL database
- Mongoose: ODM for MongoDB

## Usage

Use tools like Postman or curl to interact with the API endpoints.

Example curl command to create a note:
```
curl -X POST http://localhost:3000/notes -H "Content-Type: application/json" -d '{"title":"My Note","description":"This is a sample note"}'
```

## Contributing

Feel free to fork and contribute to this project.


