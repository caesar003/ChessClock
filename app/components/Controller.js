import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "./Button";

export default function Controller({ onPlay, onPause, isPlaying, onReset }) {
    return (
        <View style={styles.container}>
            {isPlaying ? (
                <Button iconName="pause" fn={onPause} />
            ) : (
                <Button iconName="play-arrow" fn={onPlay} />
            )}

            <Button iconName="refresh" fn={onReset} />
            <Button iconName="settings" />
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
