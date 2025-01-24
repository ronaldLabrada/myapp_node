require('dotenv').config();
const express =require('express');
const hbs = require('hbs');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const usuariosRoutes = require('./routes/usuarios');
const productosRoutes = require('./routes/productos');
const corsOptions = require ('./corsOptions');
const { APP_PORT, APP_HOST } = require('./constants/api-constants');
const pedidosRoutes = require('./routes/pedidos');
const { apiUrlPedidos, apiUrlProductos, apiUrlUsuarios } = require('./constants/api-constants');

// Create an Express application
const app = express();
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname,"/public"));

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    // Send the HTML file as the response
    res.render('index', { apiUrlProductos: apiUrlProductos, apiUrlPedidos:apiUrlPedidos, apiUrlUsuarios:apiUrlUsuarios });
});
// Add api routes
app.use('/usuarios', usuariosRoutes);
app.use('/productos', productosRoutes);
app.use('/pedidos', pedidosRoutes);

sequelize.sync().then(() => {
    app.listen(APP_PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${APP_PORT}`);
    });
}); 