
var noticias = [
    { Manchete: "Rússia e Ucrânia entram em conflito</b>", Corpo: "Aqui temos uma notícia detalhada, com mais espaço para exibição e etc etc...<br><br>", Data: new Date() },
    { Manchete: "Aússia e Ucrânia entram em conflito</b>", Corpo: "Aqui temos uma notícia detalhada, com mais espaço para exibição e etc etc...<br><br>", Data: new Date() },
    { Manchete: "Bússia e Ucrânia entram em conflito</b>", Corpo: "Aqui temos uma notícia detalhada, com mais espaço para exibição e etc etc...<br><br>", Data: new Date() }
]

//showFeed() = função responsável por esconder todas as notícias e então mostrar somente a desejada via onclick.

function showFeed(prefix) {
    for (i = 0; i < noticias.length; i++) {
        document.getElementById("corpo" + i).style.display = "none";
        document.getElementById("corpo" + prefix).style.display = "inline";
    }

}

//hideFeed() = função responsável por esconder a notícia via onclick

function hideFeed(prefix) {
    document.getElementById("corpo" + prefix).style.display = "none";
}

//tabelar() = Função responsável por mostrar todos os elementos da array notícias na tela.

function tabelar() {
    var string = "";
    for (i = 0; i < noticias.length; i++) {
        string += '<li id="n' + i + '" onclick="showFeed(' + i + ')" class = "manchete">' +
            noticias[i].Manchete + '</li><div style="display:none" onclick="hideFeed(' + i + ')" id="corpo' + i + '">' + noticias[i].Corpo + noticias[i].Data +
            '</div><div style="display:none" id="idEscondido">' + i + '</div> '
    }
    return string;
}

document.getElementById("listaPrincipal").innerHTML = "<ol>" + tabelar() + "</ol>";


//addNoticias() = função responsável por mostrar o formulário de "adicionar noticias" (addForm) e esconder os botões da página no meio tempo.

function addNoticias() {
    document.getElementById("addForm").style.display = "inline";
    document.getElementById("addBtn").style.display = "none";
    document.getElementById("divBtns").style.display = "none";


}

//lerCampos() = Função responsável por ler os inputs do cliente em cada campo e transforma-los num objeto, para depois serem adicionados à array principal.

function lerCampos() {
    let lerCampo = {};
    lerCampo.Manchete = "<b>" + document.getElementById("addManchete").value + "</b>";
    lerCampo.Corpo = document.getElementById("addCorpo").value + "<br><br>";
    lerCampo.Data = new Date();
    return lerCampo;

}

//validaCampos() = Função responsável por validar os campos digitados pelo cliente e avisa-lo o que está faltando.

function validaCampos() {
    /*console.log("Chamou a função validaCampos"), coloquei esse console.log e, se algo aparecer no console,
     sei que a execução chegou até aqui, se não, o problema é antes de chegar aqui.*/
    let msg = "";
    if (lerCampos().Manchete == "<b></b>") {
        msg += "-Digite a Manchete da sua notícia \n";
        document.getElementById("addManchete").style.border = "1px solid red";
    }
    if (lerCampos().Corpo == "<br><br>") {
        msg += "-Digite o Corpo da sua notícia \n";
        document.getElementById("addCorpo").style.border = "1px solid red";
    }
    if (msg != "") {
        alert(msg);
        return false
    }
    else
        alert("Sua notícia foi postada com sucesso!");

    return true

}

//salvarNoticia() = função responsável por salvar o objeto criado pela lerCampos() caso a validação seja um sucesso.

function salvarNoticia() {
    /*console.log("validaCampos",validaCampos());
    console.log("lerCampos",lerCampos());*/
    if (validaCampos() === true) {
        noticias.push(lerCampos());
        document.getElementById("listaPrincipal").innerHTML = "<ol>" + tabelar() + "</ol>";
        document.getElementById("addForm").style.display = "none";
        document.getElementById("addManchete").value = null;
        document.getElementById("addCorpo").value = null;
        document.getElementById("divBtns").style.display = "inline-block"
        document.getElementById("addBtn").style.display = "inline-block"
    }
}

/* Consolelog no nome da função (sem ()) = descrição da função e quando a função em si é chamada () ele me imprime o retorno da função
testar todos os valores que a função tem dentro dela, para debuga-la
consolelog ainda mostra, no console, a ordem que cada função está sendo executada*/

/*function compare(a, b) {
    if (a.Manchete < b.Manchete) {
        return -1;
    }
    if (a.Manchete > b.Manchete) {
        return 1;
    }
    return 0;
}
*/

//cancelar() = Função responsável pelo botão de cancelamento criado após clicarmos em "Adicionar notícia". Serve para voltar para o estado inicial da página.

function cancelar() {
    document.getElementById("addForm").style.display = "none";
    document.getElementById("addBtn").style.display = "inline-block";
    document.getElementById("addManchete").value = null;
    document.getElementById("addCorpo").value = null;
    document.getElementById("divBtns").style.display = "inline-block";
    document.getElementById("addManchete").style.border = "2px solid black";
    document.getElementById("addCorpo").style.border = "1px solid black";

}

//sortData() = Função responsável por organizar as notícias pelo objeto new Date() da array noticias.

function sortData() {
    noticias.sort(function compare(a, b) {

        if (a.Data > b.Data) {
            return 1
        }
        if (a.Data < b.Data) {
            return -1
        }
        if (a.Data = b.Data) {
            return 0
        }
    })
    document.getElementById("listaPrincipal").innerHTML = "<ol>" + tabelar() + "</ol>";

}


//sortA() = Função responsável por sortear as notícias alfabeticamente. 

function sortA() {
    noticias.sort(function (a, b) {
        return a.Manchete.localeCompare(b.Manchete)
    })
    document.getElementById("listaPrincipal").innerHTML = "<ol>" + tabelar() + "</ol>";
}

