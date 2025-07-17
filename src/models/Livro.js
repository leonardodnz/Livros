const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Livro = sequelize.define('Livro', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3, 100], // Mínimo 3 letras
    },
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0.01, // Preço > 0
    },
  },
  estoque: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
}, {
  timestamps: true, // Adiciona createdAt/updatedAt
});

module.exports = Livro;