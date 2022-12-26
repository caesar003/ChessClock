import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Controller(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Setting</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
});
