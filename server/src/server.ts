import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {

    return response.json({message: "Hello Word"});    
});

// app.get('/users', (request, response) => {
//     const users = [
//         { name: "João", age: "20"},
//         { name: "Vivi", age: "20"}
//     ]
//     return response.json(users);
    
// });

app.listen(3333);


