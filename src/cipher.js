const cipher = {
  criptografar:function criptografar(mensagem, offset){
      let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let palavraCodficada = mensagem.toUpperCase();
      let valorDeslocamento = Number(offset);
      let resultado = "";
      let tamanhoDaPalavra  = palavraCodficada.length;
      var contador = 0;
      let espaco ="     "
      while(contador<tamanhoDaPalavra){
            let posicaoLetra = palavraCodficada.charAt(contador);
        if (posicaoLetra !=" "){
            let noAlfabeto = alfabeto.indexOf(posicaoLetra);
            let deslocando = (noAlfabeto+valorDeslocamento)%26;
            let novaletra = alfabeto.charAt(deslocando);
            resultado = resultado+novaletra;
            contador = contador +1;
            console.log(resultado)
          }
        else {
          resultado = resultado+espaco;
          console.log(resultado)
          contador = contador+1
        }    
      }  
  return resultado
  console.log(resultado)
  },

  descriptografar: function descriptografar(mensagem,offset){
      let alfabeto = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
      let palavraCodficada = mensagem.toUpperCase();
      let valorDeslocamento = Number(offset);
      let resultado = "";
      let tamanhoDaPalavra  = palavraCodficada.length;
      var contador = 0;
      let espaco ="     "
      while(contador<tamanhoDaPalavra){
            let posicaoLetra = palavraCodficada.charAt(contador);
            //console.log(posicaoLetra)
        if (posicaoLetra !=" "){
            let noAlfabeto = alfabeto.indexOf(posicaoLetra);
            //console.log(noAlfabeto)
            let deslocando = (noAlfabeto+valorDeslocamento)%26;
            //console.log(deslocando)
            let novaletra = alfabeto.charAt(deslocando);
            //console.log(novaletra)
            resultado = resultado+novaletra;
            contador = contador +1;
            console.log(resultado)
          }
        else {
          resultado = resultado+espaco;
          console.log(resultado)
          contador = contador+1

        }    
      }  
  return resultado
  console.log(resultado)
  }
   };

export default cipher;
  