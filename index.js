const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const Usuario = require('./models/Usuario');
const PORT = process.env.PORT || 3000;

//configuracao do handleBars
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main'
}));

app.use('/', express.static('public'));
app.use(bodyParser.urlencoded({extended:false}))
app.set('view engine', 'hbs');

//rota inicial
//redenriza o home.hbs para abra dentro da tag {{{body}}} no layout
app.get('/', (req, res)=>{
    res.render('home');
})

app.get('/cad_users', (req, res)=>{
    res.render('cad_users');
})

app.get('/exibir_users', async (req, res)=>{
    const retorna = await Usuario.findAll().then((valores) =>{

if(valores.length > 0){

return res.render('exibir_users', {NavActiveUsers:true, table:true,
usuarios: valores.map(valores => valores.toJSON())})


}else{
    res.render('exibir_users',{NavActiveUsers:true,table:false})
    console.log(valores)
}
    }).catch((err) => {

console.log(`Houve um problema: ${err}`)


    })
    
})

app.get('/editar_users', (req, res)=>{
    res.render('editar_users');
})


app.post('/insert_users', (req,res)=>{
    console.log(req.body)

var name = req.body.name;
var email = req.body.email;
var password = req.body.password;

Usuario.create({
    name: name,
    email: email.toLowerCase(),
    password: password
}).then(function(){
    console.log('Cadastro realizado com sucesso!');
    return res.redirect('/exibir_users');
}).catch(function(erro){
    console.log(`Ops, deu erro: ${erro}`);
})



})

app.listen(PORT, () => {
    console.log("Servidor rodando em localhost:" + PORT)
})
