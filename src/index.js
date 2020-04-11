import cipher from './cipher.js';

const botaoCriptografar = document.getElementById("cifrar");
botaoCriptografar.addEventListener("click",printMensagemCifrada)

const botaoDescriptografar = document.getElementById("descifrar");
botaoDescriptografar.addEventListener("click",printMensagemDescifrada)

function printMensagemCifrada (){
    let offset1 = document.getElementById("offset").value
    let mensagem1 = document.getElementById("paracifrar").value
    document.getElementById("printar").innerHTML = cipher.encode(offset1, mensagem1);
    document.getElementById("mensagem").innerText ="A mensagem cifrada é:  "
    return
}

function printMensagemDescifrada (){
    let offset1 = document.getElementById("offset").value
    let mensagem1 = document.getElementById("paracifrar").value
    document.getElementById("printar").innerHTML = cipher.decode(offset1, mensagem1);
    document.getElementById("mensagem").innerText ="A mensagem descifrada é:  "
    return
}
