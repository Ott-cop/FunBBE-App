import { SafeAreaView } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import globalStyle from "../../globalStyle";
import Profissionais from "../QuemSomos/Profissionais";

export default function Equipe() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={{flex: 1, alignItems: "center"}}>
                <View style={styles.backgroundTitle}>
                    <Text style={styles.title}>EQUIPE</Text>
                </View>
                <View style={{height: 40}} />
                
                <Text style={styles.subtitle}>CONHEÇA NOSSA <Text style={{color: globalStyle.secondary}}>EQUIPE!</Text></Text>
                
                <View style={{height: 20}} />

                <View style={{gap: 30}}>
                    <Profissionais nome="Emilia Santos Barreto" cargo="Professora Pré Escola"/>
                    <Profissionais nome="Mariana Nahas Sabbadini" cargo="Professora Fundamental ll"/>
                    <Profissionais nome="Angela Marta M. Ferraz" cargo="Professora Ensino Médio"/>
                    <Profissionais nome="Angela Maria Galli" cargo="Professora Pré Escola"/> 
                </View>
                
                
            </View>
        </SafeAreaView>
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
        fontSize: 30,
        alignItems: "center",
        color: globalStyle.primary
    },
    paragraph: {
        fontFamily: "Alegreya",
        fontSize: 20,
        textAlign: "center"
    }
});