import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import { authorRoutes } from './routes/authors.routes';
import { bookRoutes } from './routes/books.routes';
import { userRoutes } from './routes/users.routes';
import { noteRoutes } from './routes/notes.routes';

// Instance the express framework
const app = express();

// Setting the port of aplication server
app.set('port', 3000);

// Middlewares
app.use(cors());
app.use(express.json()); // Poder interpretar json en las peticiones

// Load the file routes users
app.use('/users', userRoutes.router);
app.use('/books', bookRoutes.router);
app.use('/authors', authorRoutes.router);
app.use('/notes', noteRoutes.router);

// Start the server, using the port defined
app.listen(app.get('port'), () => {

    console.log('New console.log');
    console.log('New console.log 1');
    console.log(`Ther server is running on port ${app.get('port')}`); 
    
});

