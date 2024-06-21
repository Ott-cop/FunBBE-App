import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AppBar from "./Appbar";

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <AppBar />
            <View style={{flex: 1, justifyContent: "center"}}>
                <View style={{flexDirection: "row", justifyContent: "center"}}>
                    <Text style={styles.title}>Seja bem-vindo à FunBBE!</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#212275",
        padding: 10
    },
    header: {
        flex: 1,
        color: "fff",
        flexDirection: "row",

    },  
    title: {
        color: "#fff",
        fontSize: 30
    }
});