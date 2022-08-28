// Express application 
import express from 'express';
import compression from 'compression';

import { fileURLToPath } from 'url';
import { dirname, sep } from 'path';

// configuration 
const 
    __dirname = dirname(fileURLToPath( import.meta.url )) + sep,
    cfg = {
        port: process.env.PORT || 3000,
        dir: {
            root: __dirname,
            static: __dirname + 'static' + sep,
            views: __dirname + 'views' + sep
        }
    };

console.dir(cfg, { depth: null, color: true });

// Express initiation
// ...rest of code

// configuration
/* const 
    cfg = {
        port: process.env.PORT || 3000
    };
 */
// Express initiation
const app = express();

// use EJS templates
app.set('view engine', 'ejs');
app.set('views', cfg.dir.views);

// do not identify Express
app.disable('x-powered-by');

// log every request to the terminal
app.use((req, res, next) => {
    console.log(req.url);
    next();
});

// HTTP compression
app.use( compression () );


// home page route 
app.get('/', (req, res) => {
    res.render('message', { title: 'Hello World!' });
});

// another route
app.get('/hello/', (req, res) => {
    res.render('message', { title: 'Hello again!' });
});



// serve static assets
app.use(express.static( cfg.dir.static ));

// 404 error
app.use((req, res) => {
    res.status(404).render('message', { title: 'Not found' });
});

// start server
app.listen(cfg.port, () => {
    console.log(`Example app listening at http://localhost:${ cfg.port }`);
});

// export defaults
export { cfg, app}