class Aluno{
    constructor(tipo,nome,idade,turma,curso,data,hora){
        this.tipo=  tipo; 
        this.nome=  nome;
        this.idade= idade;
        this.turma= turma;
        this.curso= curso;     
        this.data=  data;
        this.hora=  hora;

    }

    card = function () {
        let card = '<div class="card">' +
                            "<tr>"+
                                    "<td>"+  "Tipo:  "              + this.tipo      + "<hr/>"  +"<td/>"+ 
                                    "<td>"+  "Nome:  "              + this.nome      + "<hr/>"  +"<td/>"+ 
                                    "<td>"+  "Idade: "              + this.idade     + "<hr/>"  +"<td/>"+ 
                                    "<td>"+  "Turma: "              + this.turma     + "<hr/>"  +"<td/>"+ 
                                    "<td>"+  "Curso: "              + this.curso     + "<hr/>"  +"<td/>"+      
                                    "<td>"+  "Data do cadastro: "   + this.data      + "<hr/>"  +"<td/>"+ 
                                    "<td>"+  "Hora do cadastro: "   + this.hora      + "<hr/>"  +"<td/>"+ 
                            "<tr/>"+
                    '</div>';

        return card;
    }
    
}


class Professor{
    constructor(tipo,nome,idade,turma,curso,data,hora){
        this.tipo=  tipo; 
        this.nome=  nome;
        this.idade= idade;
        this.turma= turma;
        this.curso= curso;     
        this.data=  data;
        this.hora=  hora;

    }

    card = function () {
        let card = '<div class="card">' +
                            "<tr>"+
                                    "<td>"+  "Tipo:  "              + this.tipo      + "<hr/>"  +"<td/>"+ 
                                    "<td>"+  "Nome:  "              + this.nome      + "<hr/>"  +"<td/>"+ 
                                    "<td>"+  "Idade: "              + this.idade     + "<hr/>"  +"<td/>"+ 
                                    "<td>"+  "Turma: "              + this.turma     + "<hr/>"  +"<td/>"+ 
                                    "<td>"+  "Curso: "              + this.curso     + "<hr/>"  +"<td/>"+      
                                    "<td>"+  "Data do cadastro: "   + this.data      + "<hr/>"  +"<td/>"+ 
                                    "<td>"+  "Hora do cadastro: "   + this.hora      + "<hr/>"  +"<td/>"+ 
                            "<tr/>"+
                    '</div>';

        return card;
    }
}


  ///////////////////////// VARIÁVEIS GLOBAIS

var inputTipo =document.getElementById("tipoInput");
var inputNome =document.getElementById("nomeInput");
var inputIdade=document.getElementById("idadeInput");
var inputTurma=document.getElementById("turmaInput");
var inputCurso=document.getElementById("cursosInput");
var form      = document.getElementById("cad-equip");
var divCards  = document.getElementById("cadastros");
var mensagemSucesso =document.getElementById("msg");
var mensagemAlerta =document.getElementById("msg2");
var home =document.getElementById("home");


var divFormulario = document.getElementById("formulario2");
var divResultado = document.getElementById("resultado");
var divGrade = document.getElementById("grade");


var Data = document.getElementById('recibo_data');
Data = innerHTML = dataAtual();

var Hora = document.getElementById('recibo_hora');
Hora = innerHTML = horaAtual();



var alunos      =[];
var professores =[];
var cursos      =[];
var maiorIdade  =[];
var menorIdade  =[];
var turmasManha =[];
var turmasTarde =[];
var turmasNoite =[];




////////////////////// FUNÇÕES de cadastros ////////////
function CadastrarAlunos(){
    for(let i in alunos){
    }
    alunos.push(new Aluno(inputTipo.value,inputNome.value, inputIdade.value,inputTurma.value,inputCurso.value,Data,Hora
        ));
     

  

       
       
     if(inputIdade.value >= 18){
        console.log("Aluno maior de idade");
        maiorIdade.push(new Aluno(inputTipo.value,inputNome.value, inputIdade.value,inputTurma.value,inputCurso.value,Data,Hora
            ));
            console.log(maiorIdade);

     }else if(inputIdade.value < 18){
        console.log("Aluno menor de idade");
        menorIdade.push(new Aluno(inputTipo.value,inputNome.value, inputIdade.value,inputTurma.value,inputCurso.value,Data,Hora
            ));
            console.log(menorIdade);
     }
     
     
     if(inputTurma.value == "manha"){
        console.log("Cadastrado na turma da manhã");
        turmasManha.push(new Aluno(inputTipo.value,inputNome.value, inputIdade.value,inputTurma.value,inputCurso.value,Data,Hora
            ));
            console.log(turmasManha);
     }else if(inputTurma.value == "tarde"){
        console.log("Cadastrado na turma da Tarde");
        turmasTarde.push(new Aluno(inputTipo.value,inputNome.value, inputIdade.value,inputTurma.value,inputCurso.value,Data,Hora
            ));
            console.log(turmasTarde);
     }else if(inputTurma.value == "noite"){
        console.log("Cadastrado na turma da Noite");
        turmasNoite.push(new Aluno(inputTipo.value,inputNome.value, inputIdade.value,inputTurma.value,inputCurso.value,Data,Hora
            ));
            console.log(turmasNoite);
     }
     msgSucesso() ;

    
    form.reset();
}
function CadastrarProfessores(){
    for(let i in professores){
    }
    professores.push(new Professor(inputTipo.value,inputNome.value, inputIdade.value,inputTurma.value,inputCurso.value,Data,Hora
        ));


        if(inputTurma.value == "manha"){
            console.log("Cadastrado na turma da manhã");
            turmasManha.push(new Aluno(inputTipo.value,inputNome.value, inputIdade.value,inputTurma.value,inputCurso.value,Data,Hora
                ));
                console.log(turmasManha);
             
         }else if(inputTurma.value == "tarde"){
            console.log("Cadastrado na turma da Tarde");
            turmasTarde.push(new Aluno(inputTipo.value,inputNome.value, inputIdade.value,inputTurma.value,inputCurso.value,Data,Hora
                ));
                console.log(turmasTarde);
              
         }else if(inputTurma.value == "noite"){
            console.log("Cadastrado na turma da Noite");
            turmasNoite.push(new Aluno(inputTipo.value,inputNome.value, inputIdade.value,inputTurma.value,inputCurso.value,Data,Hora
                ));
                console.log(turmasNoite);
              
         }
         msgSucesso() ;
         form.reset();
}




///// Funçao de exibiçao dos cards /////
function exibirAlunos() {
    let cartoes = "";
    
    for(let i in alunos){
        cartoes+= alunos[i].card();
    }
    divCards.innerHTML = cartoes;

    form.style.display="none";
}

function exibirProfessores() {
    let cartoes = "";
    
    for(let i in professores){
        cartoes+= professores[i].card();
    }
    divCards.innerHTML = cartoes;

    form.style.display="none";
}

function exibirAlunosT() {
    let cartoes = "";
    
    for(let i in alunos){
        cartoes+= alunos[i].card();
    }
    divCards.innerHTML = cartoes;

    form.style.display="none";
}

function exibirProfessoresT() {
    let cartoes = "";
    
    for(let i in professores){
        cartoes+= professores[i].card();
    }
    divCards.innerHTML += cartoes;

    form.style.display="none";
}


function troca(div) {
    if (div == "cadastro") {
        divFormulario.style.display = "block";
        divResultado.style.display = "none";
        divGrade.style.display="none";
        home.style.display="none";
    } else if (div == "resultado") {
        divFormulario.style.display = "none";
        divResultado.style.display = "block";
        divGrade.style.display="none";
        home.style.display="none";

    }else if (div == "grade") {
        divFormulario.style.display = "none";
        divResultado.style.display = "none";
        divGrade.style.display="block";
        home.style.display="none";
    }else if (div == "home") {
        divFormulario.style.display = "none";
        divResultado.style.display = "none";
        divGrade.style.display="none";
        home.style.display="block";
    }
}
function Imprimir(){
    var data = document.getElementById('recibo_data').innerHTML = dataAtual();
    exibir();


}


    function dataAtual() {
        const hoje = new Date()
        const dia = hoje.getDate().toString().padStart(2,'0')
        const mes = String(hoje.getMonth() + 1).padStart(2,'0')
        const ano = hoje.getFullYear()
        const dataAtual1 = `${dia} / ${mes} / ${ano}`
        
       return dataAtual1;
    
    }


function horaAtual() {
    let dt = new Date();
    let horas=dt.getHours();
    let minutos=dt.getMinutes();
    let segundos=dt.getSeconds();
    return dt.getHours() + ":" + (dt.getMinutes());
   
}



function todosCadastros(){
    switch(inputTipo.value){
        case"Aluno":
        
        CadastrarAlunos();

        break;

        case"Professor":
       
        CadastrarProfessores();
        break;

        case"0":
        msgAlert();
        
        break;

    }
}


function exibirTodos(){
    exibirAlunosT();
    exibirProfessoresT();
}

function exibirTodasTurmas(){
   
    exibirTurmasManhaT();
    exibirTurmasTardeT();
    exibirTurmasNoiteT();
}




////// exibir todas turmas organizadas ///
function exibirTurmasManhaT() {
    let cartoes = "";
    
    for(let i in turmasManha){
        cartoes+= turmasManha[i].card();
    }
    divCards.innerHTML = cartoes;

    form.style.display="none";
}

function exibirTurmasTardeT() {
    let cartoes = "";
    
    for(let i in turmasTarde){
        cartoes+= turmasTarde[i].card();
    }
    divCards.innerHTML += cartoes;

    form.style.display="none";
}
function exibirTurmasNoiteT() {
    let cartoes = "";
    
    for(let i in turmasNoite){
        cartoes+= turmasNoite[i].card();
    }
    divCards.innerHTML += cartoes;

    form.style.display="none";
}



///// exibir  maior e menor de idade////
function exibirMaiordeidade() {
    let cartoes = "";
    
    for(let i in maiorIdade){
        cartoes+= maiorIdade[i].card();
    }
    divCards.innerHTML = cartoes;

    form.style.display="none";
}

function exibirMenordeidade() {
    let cartoes = "";
    
    for(let i in menorIdade){
        cartoes+= menorIdade[i].card();
    }
    divCards.innerHTML = cartoes;

    form.style.display="none";
}

//// exibir turmas por turnos ////

function exibirTurmasManha() {
    let cartoes = "";
    
    for(let i in turmasManha){
        cartoes+= turmasManha[i].card();
    }
    divCards.innerHTML = cartoes;

    form.style.display="none";
}
///==========================////
function exibirTurmasTarde() {
    let cartoes = "";
    
    for(let i in turmasTarde){
        cartoes+= turmasTarde[i].card();
    }
    divCards.innerHTML = cartoes;

    form.style.display="none";
}
///===========================///
function exibirTurmasNoite() {
    let cartoes = "";
    
    for(let i in turmasNoite){
        cartoes+= turmasNoite[i].card();
    }
    divCards.innerHTML = cartoes;

    form.style.display="none";
}

////funçao aparecer mensagem de sucesso ///

function msgSucesso() {
    
    setTimeout(function(){
        mensagemSucesso.style.display = "block"; 
        msgSucessoSumir(); 
    },700);

}
function msgAlert() {
    
    setTimeout(function(){
        mensagemAlerta.style.display = "block"; 
        msgSucessoSumir2(); 
    },700);

}


function msgSucessoSumir() {
    
    setTimeout(function(){
        mensagemSucesso.style.display = "none";  
    },1700);

}
function msgSucessoSumir2() {
    
    setTimeout(function(){
        mensagemAlerta.style.display = "none";  
    },1700);

}


function recarregar(){
    var btn = document.querySelector("#refresh");
btn.addEventListener("click", function() {
    
    location.reload();
});

}

