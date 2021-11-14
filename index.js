const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect(erro => {
  if(erro){
    console.log(erro)
  }
  else{
    console.log('sem erro')
    Tabelas.init(conexao)
    const app = customExpress()
    app.listen(3000, function(req,res){
      console.log('servidor rodando na porta 3000')
    })
  }
})

