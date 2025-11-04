import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export function ListaPacientes() {
  const [pacientes, setPacientes] = useState([
    { id: "1", nome: "João da Silva", telefone: "(43) 99999-1111" },
    { id: "2", nome: "Maria Oliveira", telefone: "(43) 98888-2222" },
    { id: "3", nome: "Carlos Souza", telefone: "(43) 97777-3333" },
    { id: "4", nome: "Ana Pereira", telefone: "(43) 96666-4444" },
  ]);

  const [pesquisa, setPesquisa] = useState("");

  const pacientesFiltrados = pacientes.filter((p) =>
    p.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  const editarPaciente = (id) => {
    alert(`Editar paciente com ID: ${id}`);
  };

  const apagarPaciente = (id) => {
    setPacientes(pacientes.filter((p) => p.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={Estilo.card}>
      <View style={{ flex: 1 }}>
        <Text style={Estilo.nome}>{item.nome}</Text>
        <Text style={Estilo.telefone}>{item.telefone}</Text>
      </View>

      <View style={Estilo.acoes}>
        <TouchableOpacity
          onPress={() => editarPaciente(item.id)}
          style={Estilo.botaoIcone}
        >
          <MaterialIcons name="edit" size={24} color="#1e90ff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => apagarPaciente(item.id)}
          style={Estilo.botaoIcone}
        >
          <MaterialIcons name="delete" size={24} color="#ff3b30" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={Estilo.container}>
      {/* Barra de pesquisa */}
      <View style={Estilo.pesquisaContainer}>
        <MaterialIcons name="search" size={24} color="#fff" />
        <TextInput
          style={Estilo.inputPesquisa}
          placeholder="Pesquisar paciente..."
          placeholderTextColor="#adadad"
          value={pesquisa}
          onChangeText={setPesquisa}
        />
      </View>

      <FlatList
        data={pacientesFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={
          <Text style={Estilo.textoVazio}>Nenhum paciente encontrado.</Text>
        }
      />
    </View>
  );
}

const Estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001f33",
    padding: 20,
  },
  pesquisaContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#003d66",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  inputPesquisa: {
    flex: 1,
    height: 40,
    marginLeft: 8,
    color: "#fff",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E9F8FF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#d3d3d3",
  },
  nome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#001f33",
  },
  telefone: {
    fontSize: 14,
    color: "#555",
  },
  acoes: {
    flexDirection: "row",
    marginLeft: 10,
  },
  botaoIcone: {
    marginLeft: 10,
  },
  textoVazio: {
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});
