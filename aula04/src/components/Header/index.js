import { Feather } from '@expo/vector-icons';
import { StyleSheet,TouchableOpacity,Text, View, StatusBar } from "react-native"

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({nomeUsuario = "Não identificado"}){
    return(
        <View style={Estilo.container}>
            <View style={Estilo.content}>
                <Text style={Estilo.title}>{nomeUsuario}</Text>
                <TouchableOpacity style={Estilo.buttonUser}>
                    <Feather name="user" size={27} color="#fff"/>
                </TouchableOpacity>
            </View>
        </View>
    ) 
}
const Estilo = StyleSheet.create({
    container: {
        backgroundColor: '#8000ff',
        paddingTop: StatusBarHeight,
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44
    },
    content: {
        flex: 1,
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2
    }
})