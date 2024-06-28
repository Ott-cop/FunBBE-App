import { SafeAreaView } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import globalStyle from "../../globalStyle";

export default function QuemSomos() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={{flex: 1, alignItems: "center"}}>
                <View style={styles.backgroundTitle}>
                    <Text style={styles.title}>QUEM SOMOS</Text>
                </View>
                <View style={{height: 40}} />
                <View>
                    <Text style={styles.subtitle}>A MELHOR <Text style={{color: globalStyle.secondary}}>ESCOLA</Text></Text>
                </View>
                <View style={{height: 20}} />
                <View>
                    <Text style={styles.paragraph}>A Escolas Integradas ”Prof. Nivaldo Salch Stipp” é mantida pela FunBBE (Fundação Barra Bonita de Ensino), e tem sua sede na cidade de Barra Bonita, no interior do estado de São Paulo. {"\n\n"}Fundada em 1963, era conhecida como Colégio Comercial de Barra Bonita, não possuindo ainda uma estrutura bem definida. Somente em 1966 surge como personalidade jurídica, adequando-se à Lei 493 do ano em vigência, sancionada pelo então prefeito da época, Dr. Clodoaldo Antonângelo. Passa então a dispor sobre a criação da Fundação Barra Bonita de Ensino, ou como é popularmente conhecida, FunBBE, que passa a ser a instituição mantenedora do Colégio Comercial e dos demais cursos implementados por ela. </Text>
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
        fontSize: 30
    },
    paragraph: {
        fontFamily: "Alegreya",
        fontSize: 20,
        textAlign: "center"
    }
});