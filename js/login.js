function onLoadLogin(){
    const token_logado = sessionStorage.getItem("token_logado");
    if(token_logado !== null){
        // redireciona para a pagina home pois usuario ja esta logado
        window.location.href = "home.html";
    }
}

function login(){
    // chama a api de login
    const email = document.querySelector("#login-email").value;
    const senha = document.querySelector("#login-senha").value;

    const body = {
        usuemail : email,
        ususenha : senha
    };

    callApi("POST", "login", body, function(data) {

        // pega os dados de token retornados e seta na sessao do navegador
        sessionStorage.setItem("token_logado", data.dadoslogin.token);
        sessionStorage.setItem("usuario_logado", data.dadoslogin.usunome);

        window.location.href = "home.html";
    });
}

function gravaRegistroLogin(){

    debugger;

    // chama a api de cadastro de login
    const nome = document.querySelector("#cadastro-nome").value;
    const email = document.querySelector("#cadastro-email").value;
    const senha = document.querySelector("#cadastro-senha").value;

    const body = {
        usunome : nome,
        usuemail : email,
        ususenha : senha,
        usutoken: "token",
        usuativo:1
    };

    callApi("POST", "users", body, function(data) {
        debugger;

        // pega os dados de token retornados e seta na sessao do navegador
        sessionStorage.setItem("token_logado", data.usutoken);

        // redireciona para a pagina home
        window.location.href = "home.html";
    });
}