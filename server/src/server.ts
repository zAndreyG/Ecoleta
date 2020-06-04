import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Olá')
    
    response.json([
        'Andrey',
        'Aryan',
        'Arysson'
    ]);
});

app.listen(3333);