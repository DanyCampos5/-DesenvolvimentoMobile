import { View, Text, StyleSheet } from "react-native";
import Header from '../../components/Header';
import Balance from '../../components/Balance';

export default function Home(){
    return(
        <View style={Estilo.container}>
            <Header nomeUsuario="Dani Campos" />
            <Balance saldo={"22.428,91"} despesas="-592,40" />
        </View>
    )
}

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eaeaea",
    }
})


