import { View,StyleSheet, FlatList, Text } from "react-native";

const DADOS = [
    { id: "1", marca: "Ford", modelo: "Fusion", ano: "2010"},
    { id: "2", marca: "Honda", modelo: "Civic", ano: "1998"},
    { id: "3", marca: "Toyota", modelo: "Corolla", ano: "1998"},
    { id: "4", marca: "BYD", modelo: "Seal", ano: "2025"},
    { id: "5", marca: "Miura", modelo: "X8", ano: "1989"}  
]

const Item = ({marca, modelo, ano}) => (
    <View style={Estilo.items}>
      <Text style={Estilo.title}>{marca}</Text>  
      <Text style={Estilo.detail}>{modelo}</Text>          
    </View>
)


export default function ListaCarros(){

    return(
        <View style={Estilo.container}>
            <FlatList
                data={DADOS}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <Item marca={item.marca} modelo={item.modelo} ano={item.ano}/>}
            />
        </View>
    )
}

const Estilo = StyleSheet.create({
    container: {
        flex: 1
    },
    items: {
        backgroundColor: "#f5f5f5",
        padding: 12,
        borderRadius: 8
    },
    title: {
        fontWeight: '600',
        marginBottom: 4,
        fontSize: 22,
        marginBottom: 8
    },
    detail: {
        fontWeight: '300',
        fontSize: 18
    }
})