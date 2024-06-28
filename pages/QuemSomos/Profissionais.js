import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import globalStyle from "../../globalStyle";

export default function Profissionais({ nome, cargo }) {
    return(
        <>
            <View>
                <View style={{flexDirection: "row", justifyContent: "center"}}>
                    <View style={styles.backgroundPerfil}>
                        <MaterialCommunityIcons name="account" color={globalStyle.primary} size={40} />
                    </View>
                </View>
                <View style={{height: 10}} />
                <View style={{flexDirection: "row", justifyContent: "center"}}>
                    <Text style={styles.profissional}>{nome} - <Text style={{color: globalStyle.secondary}}>{cargo}</Text></Text>
                </View>
            </View>
        </>
 
    );
}

const styles = StyleSheet.create({
    profissional: {
        fontFamily: "Alegreya",
        fontSize: 20,
        textAlign: "center"
    },
    backgroundPerfil: {
        height: 50,
        width: 50,
        borderColor: globalStyle.primary,
        borderWidth: 2,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    }
});