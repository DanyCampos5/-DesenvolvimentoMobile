import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default () => {
    return (
        <View style={Estilo.container}>
            <Text style={Estilo.txtPrincipal}>Configuração de Perfil</Text>
        </View>
    )
}

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtPrincipal: {
        fontSize: 16,
        fontWeight: '600'
    }
})
