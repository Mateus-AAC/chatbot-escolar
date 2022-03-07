function init() {
    let res_elm1 = document.createElement("div");
    res_elm1.innerHTML = "Olá tudo bem ?";
    res_elm1.setAttribute("class", "left");

    let res_elm2 = document.createElement("div");
    res_elm2.innerHTML = "Abaixo sao as principais perguntas para selecionar uma digite o número que ela corresponder:";
    res_elm2.setAttribute("class", "left");

    let res_elm3 = document.createElement("div");
    res_elm3.innerHTML = "1 - O que foi o arcadismo?::::::::2 - Quais sao as principais caracteristicas?::3 - Quando e como surgiu?:::::::::::4 - Quem foi os principais influenciadores?::5 - Qual a diferença entre barroco e arcadismo?";
    res_elm3.setAttribute("class", "left");

    document.getElementById('msg').appendChild(res_elm1);
    document.getElementById('msg').appendChild(res_elm2);
    document.getElementById('msg').appendChild(res_elm3);
}

document.getElementById('reply').addEventListener("click", async (e) => {
    e.preventDefault();

    let req = document.getElementById('msg_send').value;

    for (key in database) {
        if (key == req) {
            let perguntas = document.createElement("div") 
            perguntas.innerHTML = req;
            perguntas.setAttribute("class", "right");
            document.getElementById('msg').appendChild(perguntas);
    
            let resposta = document.createElement("div");
            resposta.innerHTML = database[key];
            resposta.setAttribute("class", "left");
            document.getElementById('msg').appendChild(resposta); 

            document.getElementById('msg_send').value = "";
        }  else {
            document.getElementById('msg_send').value = "";
        }
    }
});

