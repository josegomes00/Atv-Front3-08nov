import React from "react";
import Filho from "./AtividadeFilho";

function Pai() {

    return (
        <>
            <h1>Componente Pai</h1>

            <Filho text={"Valor do pai para o filho"}>
            </Filho>
        </>
    )

}
export default Pai