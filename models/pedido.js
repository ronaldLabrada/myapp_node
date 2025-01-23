const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const Usuario = require('./usuario');
const Producto = require('./producto');
const Pedido = sequelize.define('Pedido', {
    usuario_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id'
        }
    },
    producto_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Producto,
            key: 'id'
        }
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});
module.exports = Pedido;