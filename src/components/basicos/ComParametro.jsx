import React from "react";

export default (props) => {
    // props é somente leitura!!!!
    //props.titulo = "outro título"; /*isso não pode*/
    return (
        <>
            <h3>{props.titulo}</h3>

            <p>{props.subtitulo}</p>
        </>
    );
};
