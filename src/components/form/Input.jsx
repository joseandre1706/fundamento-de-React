import React, {useState} from "react";


export default (props) => {
    const [nome, setNome] = useState('André');
    return (
        <>
            <h3>{nome}</h3>
           <input type="text" value={nome}
            onChange={event => setNome(event.target.value)} />
        </> 
    );
};
