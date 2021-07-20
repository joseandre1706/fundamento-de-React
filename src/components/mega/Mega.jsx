import React, {useState} from "react";

export default (props) => {

  const [numeros, setNumeos] = useState(Array(props.qtdNumero).fill(0))
   
  function gerarNumerosNaoContido(array){
    const max = 60;
    const min = 1;
    const novoNumero = parseInt(Math.random() * (max - min)) + min;

    return array.includes(novoNumero) ? gerarNumerosNaoContido(array) : novoNumero;
  }

  function gerarNuemros(){
    const novoArray = Array(props.qtdNumero)
      .fill()
      .reduce((a, e) => {
        const novoNumero = gerarNumerosNaoContido(a)
        return [...a, novoNumero]
      }, [])
      .sort((a, b) => a - b)
    setNumeos(novoArray);
  }
  
  return(
      <>
        <h3>Mega-Sena</h3>
        <h4>{numeros.join(' ')}</h4>

        <button onClick={gerarNuemros}> Gerar Número</button>
      </>
    );
};
