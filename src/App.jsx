import "./App.css";
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro.jsx";
import ComFilhos from "./components/basicos/ComFilhos";
import Card from "./components/layout/Card";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional.jsx";
import CondicionalComIf from "./components/basicos/CondicionalComIf";
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";
import Mega from './components/mega/Mega';

export default (props) => (
    <div clasName="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#11 - Mega-Sena" color="#73503c">
            <Mega qtdNumero={8}></Mega>
            </Card>

            <Card titulo="#10 - Contador" color="#293e6a">
                <Contador passo={10} valor={100}></Contador>
            </Card>

            <Card titulo="#09 - Input" color="#9c0f5f">
                <Input></Input>
            </Card>

            <Card titulo="#08 - Comunicação Indireta" color="#000">
                <Super></Super>
            </Card>

            <Card titulo="#07 - Comunicação Direta" color="#4298b5">
                <Pai sobrenome="Freitas"></Pai>
            </Card>

            <Card titulo="#06 - Condicional com If: v2" color="#FA6900">
                <CondicionalComIf numero={10}> </CondicionalComIf>
            </Card>

            <Card titulo="#05 - Condicional: v1" color="#E94C6F">
                <Condicional numero={11}> </Condicional>
            </Card>

            <Card titulo="#04 - Repetição" color="#008BBA">
                <Repeticao> </Repeticao>
            </Card>

            <Card titulo="#03 - Componete com Filhos" color="#D96459">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo="#02 - Componete com Parâmetro" color="#FF85CB">
                <ComParametro
                    titulo="Esse é o título"
                    subtitulo="Esse é o subtpitulo"
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#92B06A">
                <Primeiro />
            </Card>
        </div>
    </div>
);
