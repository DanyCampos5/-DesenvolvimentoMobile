import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

import Saudacao from '../components/Saudacao';
import BotaoPersonalizado from "../components/BotaoPersonalizados";

const receberMensagemDoFilho = (mensagem) => {
    console.log("PAI: Recebi uma mensagem do filho");
    console.log("A mensagem: ", mensagem);
}

export default function Home() {
    return(
        <View style={Estilo.container}>
            <Text style={Estilo.titulo}>Pagina inicial</Text>
            <Saudacao 
                 nome="Helton Azevedo"
                 call={receberMensagemDoFilho}
            />
           
            <BotaoPersonalizado
                pressCallBack={(mensagem) => console.log(`PAI: ${mensagem}`)}
                texto="Logar"
                cor="green"
                />
            <BotaoPersonalizado
                pressCallBack={(mensagem) => console.log(`PAI: ${mensagem}`)}
                texto="comportamento 2"
                cor="blue"
                />    
        </View>
    )
}

const Estilo = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titulo: {
        fontSize: 40
    }
})