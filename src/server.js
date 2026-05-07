import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app= express();
const PORT = 3000;
const host = 'localhost';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.static('src/public'));

app.get('/', (req, res) => {
    // Eventually, this data might come from a database or a JSON file
    const projects = [
        { name: "My Portfolio", description: "Node.js app" },
        { name: "Weather App", description: "API project" }
    ];

    res.render('index', { 
        title: 'Home', 
        projects: projects // Passing the data to the view
    });
});
if(process.env.NODE_ENV !== 'test') {
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));
}

export default app;
