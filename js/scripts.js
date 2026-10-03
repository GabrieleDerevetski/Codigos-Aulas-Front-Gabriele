function proc(){
    console.log("Entrou na função de Processamento!");
    let n = document.getElementById("nome").value;
    console.log(n);

    //Saida de dados
    let res = document.getElementById("resultados");
    res.innerHTML = "Seja Bem Vindo(a) " + n + "!"
}