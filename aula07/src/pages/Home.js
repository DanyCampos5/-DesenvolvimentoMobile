import {StyleSheet, Text, TextInput, View, } from 'react-native';

//Hooks
import {useState} from 'react';


export default function Home(){
    //let nome = "abaxi";
    const [nome, setNome] = useState("");
    
    //Em bloco
    //let nome = "Helton";
    return(
        <View style={Estilo.container}>
            <Text style={Estilo.labelPrincipal}>
                Pagina Principal
            </Text>

            <TextInput
                placeholder='Digite o seu nome'
                style={Estilo.inputPrincipal}
                onChangeText={(texto) => {
                    console.log("Valor de nome:", nome);
                    console.log("Valor de texto: ", texto);
                    
                    setNome(texto);

                    nome = texto;
                    console.log("Novo valor de nome: ", nome);
                }}
                value={nome}
            />

            <Text style={Estilo.labelPrincipalSecundaria}> Seja bem-vindo! {nome} </Text>
        </View>

    )
}

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelPrincipal:{
        fontSize: 32,
        fontWeight: '700'
    },
    inputPrincipal: {
        borderWidth: 1,
        padding: 8,
        marginTop: 6
    },
    labelPrincipalSecundaria: {
        fontSize: 26,
        fontWeight: '400'
    }
})