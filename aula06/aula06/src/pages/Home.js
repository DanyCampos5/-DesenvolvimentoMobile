import { SafeAreaView, Text, StyleSheet } from "react-native";
import ListaCarros from "../components/ListaCarros";

export default function Home(){

    return(
        <SafeAreaView style={Estilo.container}>
            <Text style={Estilo.labelPrincipal}>
                Pagina Home
            </Text>
            <ListaCarros />
        </SafeAreaView>
    )
}

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        justfyContent: 'çenter',
        alignItems: 'center'
    },
    labelPrincipal: {
        fontSize: 22
    }
})