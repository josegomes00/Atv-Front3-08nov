
import React,{useState} from "react"

export default props =>{

    const [exibicao1, setExibicao1] = useState("");
    
    const [exibicao2, setExibicao2] = useState("");

    const [valor1, setValor1] = useState("");
    const [valor2, setValor2] = useState("");

    
    function callBack1(e){
        setValor1(e.target.value);
    }

    function callBack2(e){
        setValor2(e.target.value);
    }

    function exibirValor(){
        setExibicao1(valor1)
        setExibicao2(valor2) 
    }

    return(
        <div style={{flexDirection:"collumn"}}>
        <h2>{exibicao1}</h2>
        <h2>{exibicao2}</h2>
        <input value={valor1} onChange={callBack1}></input>
        <input value={valor2} type="password" onChange={callBack2}></input>
        <button onClick={exibirValor}>Exibir</button>
        </div>
    )

}

