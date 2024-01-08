# My Project

This project is a robust and efficient movie management system built with modern technologies like Node.js, Prisma, and NestJS.

## Features

- User authentication and authorization
- CRUD operations for movies
- Advanced movie search with multiple filters
- Pagination and sorting

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/andrevvalle/globo.git
   ```
2. Install the dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory and fill it with your database credentials:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
   JWT_PRIVATE_KEY="asdhasudhasdasojdaisjdoasijdasoijdasoijdasoidjasodija"
   JWT_PUBLIC_KEY="asdhasudhasdasojdaisjdoasijdasoijdasoijdasoidjasodija"
   ```
4. Run the database migrations:
   ```
   npx prisma migrate dev
   ```
5. Run seeds:
   ```
   npm run seed
   ```
6. Start the server:
   ```
   npm run start
   ```

## Usage

### Create an Account

Send a POST request to `/accounts` with the following JSON body:

```json
{
    "name": "John Doe",
    "email": "example@example.com",
    "password": "123456"
}
```

### Authenticate

Send a POST request to `/sessions` with the following JSON body:

```json
{
    "email": "example@example.com",
    "password": "123456"
}
```

### Create a Movie

Send a POST request to `/create-movie` with the following JSON body:

```json
{
    "title": "Example Movie",
    "year": 2022,
    "director": "John Doe",
    "genre": "Action",
    "actors": ["Actor 1", "Actor 2"]
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)