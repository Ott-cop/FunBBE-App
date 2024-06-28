import { Button, KeyboardAvoidingView, SafeAreaView, TextInput } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import globalStyle from "../../globalStyle";
import { useState } from "react";

export default function Contato() {

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");

    return (
        
        <KeyboardAvoidingView  style={styles.container}>
        <View style={{flex: 1, alignItems: "center"}}>
            <View style={styles.backgroundTitle}>
                <Text style={styles.title}>CONTATO</Text>
            </View>
            <View style={{height: 40}} />
            <View>
                <Text style={styles.subtitle}>FORMULÁRIO DE <Text style={{color: globalStyle.secondary}}>CONTATO</Text></Text>
            </View>
            <View style={{height: 20}} />
            <View style={{width: "90%", gap: 10}}>
                <TextInput placeholder="Nome" value={nome} onChangeText={setNome} style={styles.textinput} />   
                <TextInput placeholder="Telefone" keyboardType="decimal-pad" value={telefone} onChangeText={setTelefone} style={styles.textinput} />   
                <TextInput placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} style={styles.textinput} />   
                <TextInput placeholder="Mensagem" multiline={true} value={mensagem} onChangeText={setMensagem} style={styles.messageText} />   
                <Button title="ENVIAR" color={globalStyle.secondary} />
            </View>
        </View>
        </KeyboardAvoidingView>
       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        top: 100,
        position: "relative"
    },
    backgroundTitle: {
        backgroundColor: globalStyle.primary,
        paddingVertical: 20,
        paddingHorizontal: 40,
        borderRadius: 50
    },
    title: {
        fontFamily: "Alegreya",
        color: globalStyle.primaryfont,
        alignItems: "center",
        fontSize: 40
    },
    subtitle: {
        fontFamily: "Alegreya",
        fontSize: 30
    },
    paragraph: {
        fontFamily: "Alegreya",
        fontSize: 20,
        textAlign: "center"
    },
    textinput: {
        borderWidth: 2,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        width: "100%",
        fontSize: 25,
        fontFamily: "Alegreya"
    },
    messageText: {
        borderWidth: 2,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        width: "100%",
        height: 200,
        fontSize: 25,
        fontFamily: "Alegreya"
    }
});