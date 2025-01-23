const express =require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const usuariosRoutes = require('./routes/usuarios');
const productosRoutes = require('./routes/productos');
const corsOptions = require ('./corsOptions');

const pedidosRoutes = require('./routes/pedidos');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    // Send the HTML file as the response
    res.render('index', {});
});
app.use('/usuarios', usuariosRoutes);
app.use('/productos', productosRoutes);
app.use('/pedidos', pedidosRoutes);

const PORT = 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}); 