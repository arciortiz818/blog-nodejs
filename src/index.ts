import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';

//Importing routes
import indexRoutes from './routes/index';

//Initializations
const app = express();
import './database';

//settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers'),
    defaultLayout: 'main'
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/', indexRoutes);

//static Files
app.use(express.static(path.join(__dirname, 'public')));

//Start server
app.listen(app.get('port'), () => {
    console.log(`server on port: ${app.get('port')}`);
})