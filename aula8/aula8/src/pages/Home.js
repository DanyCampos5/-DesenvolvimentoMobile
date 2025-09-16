import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';


export default function Home({navigation}){
    return(
        <View>
            <Text Style={Estilo.container}>
                <Text style={Estilo.textoPrincipal}>Bem vindo ao APP!</Text>
                <TouchableOpacity style={Estilo.btnPrincipal}>
                    <Text> </Text>
                </TouchableOpacity>
            </Text>
        </View>
    )
}

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        justyContent: "center",
        alignItems: "center"
    },
    textoPrincipal: {
        fontSize: 20,
        fontWeight: 600
    },
    btnPrincipal: {

    }
})