import React from "react";
import Pai from "./AtividadePai";

function Filho(props) {

    return (
        <div>
            <p>Componente filho com valor: {props.text}</p>
        </div>
    )

}
export default Filho