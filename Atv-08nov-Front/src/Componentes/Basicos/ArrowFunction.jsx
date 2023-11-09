import React from "react";

const ArrowFunction = (props) => {
    let soma
    soma = props.um + props.dois;
    soma = soma > 10 ? soma -2 : soma * 3
    return (
        <div>
            A somatória é: {soma}
        </div>
    )

};

export default ArrowFunction