const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];

const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.db_database, config.db_username, config.db_password, config)

sequelize.authenticate().then(function(){
    console.log('Conectando no banco com sucesso');

}).catch(function(err){
    console.log('Falha ao se conectar:'+err);

})

module.exports= {Sequelize, sequelize}
