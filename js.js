class Equipamentos{
    constructor(nome,atividade, descricao,preco,data,hora){
        this.nome = nome;
        this.atividade = atividade;
        this.descricao= descricao;
        this.preco = preco;
        this.data=data;
        this.hora=hora;

    }

    card = function () {
        let card = '<div class="card">' +
                            "<tr>"+
                                    "<td>"+  "Nome:      "          + this.nome      + "<hr/>"  +"<td/>"+ 
                                    "<td>"+  "Atividade: "          + this.atividade + "<hr/>"  +"<td/>"+ 
                                    "<td>"+  "Descrição: "          + this.descricao + "<hr/>"  +"<td/>"+ 
                                    "<td>"+  "Preço: R$: "          + this.preco     + "<hr/>"  +"<td/>"+ 
                                    "<td>"+  "Data do cadastro: "   + this.data      + "<hr/>"  +"<td/>"+ 
                                    "<td>"+  "Hora do cadastro: "   + this.hora      + "<hr/>"  +"<td/>"+ 
                            "<tr/>"+
                    '</div>';

        return card;
    }
    
}
  ///////////////////////// VARIÁVEIS GLOBAIS


var inputNome =document.getElementById("nomeInput");
var inputAtividade =document.getElementById("atividadeInput");
var inputDescricao =document.getElementById("descricaoInput");
var inputPreco =document.getElementById("precoInput");
var form        = document.getElementById("cad-equip");
var divCards    = document.getElementById("cadastros");

var Data = document.getElementById('recibo_data');
Data = innerHTML = dataAtual();

var Hora = document.getElementById('recibo_hora');
Hora = innerHTML = horaAtual();



var ArrayEquipamentos =[];

////////////////////// FUNÇÕES
function Cadastrar(){
    for(let i in ArrayEquipamentos){
    }

   
    ArrayEquipamentos.push(new Equipamentos(inputNome.value,inputAtividade.value,inputDescricao.value,inputPreco.value,Data,Hora
        ));
    console.log(ArrayEquipamentos);
    alert("Para exibir o cadastro CLIQUE NO BOTÃO EXIBIR");
    form.reset();
}

function exibir() {
    let cartoes = "";
    
    for(let i in ArrayEquipamentos){
        cartoes += ArrayEquipamentos[i].card();
    }
    divCards.innerHTML = cartoes;
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
    return dt.getHours() + ":" + (dt.getMinutes())+ ":" + dt.getSeconds();
   
}

