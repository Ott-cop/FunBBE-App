import { SafeAreaView, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export default function Equipe() {
    return (
        <SafeAreaView style={styles.container}>
            <Card>
                <Card.Title title="Conheça nossa Equipe"></Card.Title>
                </Card>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#212275",
        padding: 10
    },
});