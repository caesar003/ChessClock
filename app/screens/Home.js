import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Screen from "../components/Screen";

export default function Home(props) {
    return (
        <Screen>
            <TouchableOpacity
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text style={{ fontWeight: "bold", fontSize: 70 }}>05.00</Text>
            </TouchableOpacity>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
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
            <TouchableOpacity
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text style={{ fontWeight: "bold", fontSize: 70 }}>05.00</Text>
            </TouchableOpacity>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {},
});
