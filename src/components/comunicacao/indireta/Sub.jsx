import React from "react";
import Sub from "./Sub";

export default (props) => {
    function acao() {
        props.onClicar(Math.random(), 'Gerado');
    }

    return (
        <div>
            <button onClick={acao}>Aterar</button>
        </div>
    );
};
