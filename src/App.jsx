import "./App.css";
import React from "react";

import Primeiro from "./components/Primeiro";
import ComParametro from './components/ComParametro.jsx'
import ComFilhos from "./components/ComFilhos";
import Card from "./components/layout/Card";
import Repeticao from "./components/Repeticao";
import Condicional from "./components/Condicional.jsx";
import CondicionalComIf from "./components/CondicionalComIf";


export default (props) => (
  <div clasName="App">
    <Card titulo="#05 - Condicional com If: v2">
      <CondicionalComIf numero={10}> </CondicionalComIf>
    </Card>

    <Card titulo="#05 - Condicional: v1">
      <Condicional numero={11}> </Condicional>
    </Card>

    <Card titulo="#04 - Repetição">
      <Repeticao> </Repeticao>
    </Card>

    <Card titulo="#03 - Componete com Filhos">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </ComFilhos>
    </Card>

    <Card titulo="#02 - Componete com Parâmetro">
      <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtpitulo" />
    </Card>

    <Card titulo="#01 - Primeiro Componente">
      <Primeiro />
    </Card>

    {/*<ComFilhos>
      <ul>
        <li>Ana</li>
        <li>Bia</li>
        <li>Carlos</li>
        <li>Daniel</li>
      </ul>
    </ComFilhos>*/}
    {/*<Primeiro> </Primeiro>

    <ComParametro titulo="Esse é o título"
        subtitulo="Esse é o subtpitulo"/>
    <ComParametro titulo="Opa"
    subtitulo="Epa"/>*/}
  </div>
);
