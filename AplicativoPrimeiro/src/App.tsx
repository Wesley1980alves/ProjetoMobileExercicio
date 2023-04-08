import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";
import Simples from "./componentes/Simples";
import Frag from "./componentes/Frag";
import ParImpar from "./componentes/ParImpar";
import UsuarioLogado from "./componentes/relacao/UsuarioLogado";

import Familia from "./componentes/relacao/Familia";
import Membro from "./componentes/relacao/Membro";

export default class App extends Component{
  render() {
    return (
      <View style={estilos.container}>
        
        <  UsuarioLogado  usuario={ {nome:'Tenente Alves',email:'wesley1980alves@gmail.com'}}/>
        < UsuarioLogado usuario={{nome:'Teste 2'}}/>
        < UsuarioLogado usuario={{email:'wesley1980alves@gmail.com'}}/>
        < UsuarioLogado  usuario={null}/>
        < UsuarioLogado usuario={{}}/>


        {/*<Simples texto='WESLEY ALVES' /> */}
        {/* <Frag titulo="Cadastro" 
              subTitulo="TELA DE CADASTRO " /> */}
        {/* <ParImpar numero={9}  /> 15 */}
       {/* <Familia>
            <Membro nome="Petriza Emily" sobreNome="Lamunier"/>
            <Membro nome="Wesley Alves
            " sobreNome="Lamunier"/> 
        </Familia>
        <Familia>
          <Membro nome="Meu Maior Amor"/>
          <Membro nome="Meu Filho"/>
          <Membro nome="Wyllyan Guilherme "/>        
            </Familia>*/}

      </View>
    );      
  }
}
  
  const estilos = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'#00008b',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },

    fonte: {
      fontSize: 50,

    },
  });