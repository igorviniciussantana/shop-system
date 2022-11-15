const db = require('.');

const Produto = db.sequelize.define('produto', {
    id:{
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: db.Sequelize.DOUBLE,
        allowNull: false
    },
    img: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
})

Produto.sync();

module.exports = Produto;
