import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";

export default function CountDown(props) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>05.00</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: { fontWeight: "bold", fontSize: 70 },
});
