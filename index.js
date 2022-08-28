// Express application 
import express from 'express';



// configuration
const 
    cfg = {
        port: process.env.PORT || 3000
    };

// Express initiation
const app = express();

// log every request to the terminal
app.use((req, res, next) => {
    console.log(req.url);
    next();
});

// home page route 
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// another route
app.get('/hello/', (req, res) => {
    res.send('Hello again');
});

// serve static assets
app.use(express.static( 'static' ));

// start server
app.listen(cfg.port, () => {
    console.log(`Example app listening at http://localhost:${ cfg.port }`);
});

