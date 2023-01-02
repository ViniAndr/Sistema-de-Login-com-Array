// elementos do input de cadastro
const nome = document.getElementById("in-nome") 
const sobrenome = document.getElementById("in-sobrenome")
const criarSenha = document.getElementById("in-senha-criar")
// array bidimensional para guardar ID e senha do login
const cadastroUsuario = Array()
cadastroUsuario["id"] = Array()
cadastroUsuario["senha"] = Array()
// area de declaração da tela de login
const idUsuario = document.getElementById("in-id")
const senhaUsuario = document.getElementById("in-senha")

// MOSTRAR SENHA
// função com dois parametros, o primeor ele passa o ID das checkdbox, ja o segundo passa o ID dos inputs das senhas 
function mostrarSenha(idChecked, idInputSenha){
    if(document.getElementById(idChecked).checked){ //.checed => verifia se a caixinha está marcada.
        document.getElementById(idInputSenha).type = "texto"
    } else{
        document.getElementById(idInputSenha).type = "password"
    }
}

// função que troca a tela => area de login ou de criar conta
function telaCriarConta(telas){
    if (telas == "telaCriarConta"){
        document.getElementById("area-login").style.display = "none"
        document.getElementById("area-criar-conta").style.display = "block"
    } else if(telaCriar = "telaLogin"){
        document.getElementById("area-login").style.display = "block"
        document.getElementById("area-criar-conta").style.display = "none"
    }
}

// validação de nome e sobre nome => retirar numeros => apeans interfaçe!! =. validação de verdade está em criarConta()
// logica => a função recebe um parametro do HTML, que é nome da variavel declarada la em cima(nome ou sobrenome)
const sequenciaNumero = /[0-9]/
function validarNomes(nomeConst){
    if(sequenciaNumero.test(nomeConst.value) || nomeConst.value == ""){
        nomeConst.style.borderColor = "#FF0000"
    } else{
        nomeConst.style.borderColor = "#CCCCCC"
    }
}

// validar senha => apeans interfaçe!! =. validação de verdade está em criarConta()
function validarCriarSenha(){
    if(criarSenha.value.length < 8 || criarSenha.value == ""){
        criarSenha.style.borderColor = "#FF0000"
    }else{
        criarSenha.style.borderColor = "#CCCCCC"
    }
}

// validar input novamente e se ok, criar conta =. validação de fato
function criarConta(){
    let ID = nome.value + Math.floor(Math.random() * 100)
    if(sequenciaNumero.test(nome.value) || sequenciaNumero.test(sobrenome.value)){
        alert("erro, nome e sobrenome não pode conter número")
    } else if(nome.value == "" || sobrenome.value == "" || criarSenha.value == ""){
        alert("erro, nenhum campo pode ficar vazio")
    } else if(criarSenha.value.length < 8){
        alert("erro, a senha precisa ter no minimo 8 caracteres")
    }
    else{
        alert(`Seu ID é ${ID} , cadastrado feito com sucesso!`)
        cadastroUsuario["id"].push(ID) //adição do ID no array()=(banco de dados)
        cadastroUsuario["senha"].push(criarSenha.value) //adição doa senha no Array()=(banco de dados)
    }
}

function login(){
    let posicaoId = cadastroUsuario["id"].indexOf(idUsuario.value) // vai retornar o valor da pocição desse indece do Array()
    //indexOf(valorASerProcurado, numeroQueComeçararAProcurar) => ex: indxOf("procure", 2)
    let posicaosenha = cadastroUsuario["senha"].indexOf(senhaUsuario.value, posicaoId) //procure esse valor aparti da posição do ID
    if(posicaoId == posicaosenha){ //se a posição do ID fo igual ao senha então login => 4==4
        alert("ok")
    } else{
        alert("erro")
    }

    console.log(cadastroUsuario["id"].indexOf("teste"))
}

