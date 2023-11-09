import React from "react";

function Spred() {
    function sum(x, y, z) {
        return x + y + z;
      }

const number = [1,2,3]
return (
    <>
    <p>Operador Spred: {sum.apply(null,number)}</p>
    <p>Operador Spred: {sum(...number)}</p>
    </>
)

}

export default Spred