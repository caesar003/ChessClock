import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

const minToMillis = (min) => min * 1000 * 60;
const formatTime = (num) => (num < 10 ? `0${num}` : num);

export default function CountDown({ minutes, isPlaying, onSwitchSide, idx }) {
    const interval = React.useRef(null);
    const [millis, setMillis] = useState(minToMillis(minutes));
    const min = Math.floor(millis / 1000 / 60) % 60;
    const sec = Math.floor(millis / 1000) % 60;

    const countDown = () => {
        setMillis((time) => {
            if (time === 0) {
                clearInterval(interval.current);
                return;
            }
            const timeLeft = time - 1000;
            return timeLeft;
        });
    };

    useEffect(() => {
        setMillis(minToMillis(minutes));
    }, [minutes]);

    useEffect(() => {
        if (!isPlaying) {
            if (interval.current) clearInterval(interval.current);
            return;
        }
        interval.current = setInterval(countDown, 1000);
        return () => clearInterval(interval.current);
    }, [isPlaying]);

    return (
        <TouchableWithoutFeedback onPress={() => onSwitchSide(idx)}>
            <View style={[styles.container, isPlaying && styles.active]}>
                <Text style={[styles.text, isPlaying && styles.activeText]}>
                    {formatTime(min)}:{formatTime(sec)}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: { fontWeight: "bold", fontSize: 70 },
    active: {
        backgroundColor: "#434242",
    },
    activeText: {
        color: "#fff",
    },
});
