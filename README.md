# Simple Notes API

This is a simple Notes API built with Node.js and Express. It allows users to create, retrieve, and delete notes using a RESTful API. The data is stored in an in-memory array for demonstration purposes.

## Features

- Create a new note
- Retrieve all notes
- Delete a note by ID

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd simple-notes-api
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Create a `.env` file based on the `.env.example` template and set the required environment variables.

### Running the Application

To start the server, run the following command:

```
npm start
```

The server will start on the port specified in the `.env` file (default is 3000).

### API Endpoints

- **POST /notes**: Create a new note
  - Request body: `{ "title": "Note Title", "content": "Note Content" }`
  
- **GET /notes**: Retrieve all notes

- **DELETE /notes/:id**: Delete a note by ID

### Error Handling

The API includes basic error handling. If an error occurs, a JSON response will be returned with the error message and status code.

