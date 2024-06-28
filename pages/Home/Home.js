import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import globalStyle from "../../globalStyle";


export default function Home() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={{flex: 1, justifyContent: "center"}}>
                <View style={{flexDirection: "row", justifyContent: "center"}}>
                    <Text style={styles.title}>Seja bem-vindo à</Text>
                </View>
                <View style={{height: 30}} />
                <View style={styles.backgroundLogo}>
                    <Image source={require('../../assets/Logo/Logo.png')} style={styles.logo} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10
    },
    header: {
        flex: 1,
        color: "fff",
        flexDirection: "row",

    },  
    title: {
        color: globalStyle.primary,
        fontFamily: 'Alegreya',
        fontSize: 50
    },
    logo: {
        width: "100%",
        height: 120
    },
    backgroundLogo: {
        backgroundColor: globalStyle.primary,
        paddingTop: 30,
        paddingBottom: 30,
        borderRadius: 20
    }
});