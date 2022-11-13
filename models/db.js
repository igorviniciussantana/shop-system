const Sequelize = require('sequelize');
const sequelize = new Sequelize('bd_loja','root','',{
    host: 'localhost',
    dialect: 'postgres',
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true
    },
    logging: false
})

sequelize.authenticate().then(function(){
    console.log('Conectando no banco com sucesso');

}).catch(function(err){
    console.log('Falha ao se conectar:'+err);

})

module.exports= {Sequelize, sequelize}
