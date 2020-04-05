import cipher from './cipher.js';


//pegando o evento "clicar" colocando o botão em uma variável
//na variável para criptografar e descptografar
//...
const botaoCriptografar = document.getElementById("cifrar");
botaoCriptografar.addEventListener("click",printMensagemCifrada)

const botaoDescriptografar = document.getElementById("descifrar");
botaoDescriptografar.addEventListener("click",printMensagemDescifrada)



//função para printar a mensagem criptografada
//...
function printMensagemCifrada (){
    let offset1 = document.getElementById("offset").value
    let mensagem1 = document.getElementById("paracifrar").value
    document.getElementById("printar").innerHTML = cipher.criptografar(mensagem1, offset1);
    document.getElementById("mensagem").innerText ="A mensagem cifada é:  "
    //console.log(mensagem1)
    return
}

function printMensagemDescifrada (){
    let offset1 = document.getElementById("offset").value
    let mensagem1 = document.getElementById("paracifrar").value
    document.getElementById("printar").innerHTML = cipher.descriptografar(mensagem1, offset1);
    document.getElementById("mensagem").innerText ="A mensagem descifrada é:  "
    //console.log(mensagem1)
    return
}

