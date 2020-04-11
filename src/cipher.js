const cipher = {
  encode:function criptografar(offset, mensagem){
      let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let resultado = "";
      let tamanhoDaPalavra = mensagem.length;
      for(let contador = 0; contador<tamanhoDaPalavra; contador ++){
        let letra = mensagem.toUpperCase().charAt(contador);
        if (letra !=" "){
            let noAlfabeto = alfabeto.indexOf(letra);
            let deslocando = (noAlfabeto+Number(offset))%26;
            let novaletra = alfabeto.charAt(deslocando);
            resultado = resultado+novaletra;
          }
        else {
          resultado = resultado + "  ";
        }    
      }  
  return resultado
  },

  decode: function descriptografar(offset,mensagem){
    let alfabeto = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
    let resultado = "";
    let tamanhoDaPalavra = mensagem.length;
    for(let contador = 0; contador<tamanhoDaPalavra; contador ++){
      let letra = mensagem.toUpperCase().charAt(contador);
      if (letra !=" "){
          let noAlfabeto = alfabeto.indexOf(letra);
          let deslocando = (noAlfabeto+Number(offset))%26;
          let novaletra = alfabeto.charAt(deslocando);
          resultado = resultado+novaletra;
        }
      else {
        resultado = resultado + "  ";
      }    
    }  
return resultado
},
      
};
export default cipher;
  