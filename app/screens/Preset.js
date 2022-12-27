import React, { useContext, useState } from "react";
import { View, StyleSheet,  Text, Button } from "react-native";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import Context from "../timer/Context";
import Screen from "../components/Screen";

const DEFAULT_PRESETS = [
    { label: "1 minute", min: 1, sec: 0, increment: 0 },
    { label: "3 minute", min: 3, sec: 0, increment: 0 },
    { label: "5 minute", min: 5, sec: 0, increment: 0 },
    { label: "10 minute", min: 10, sec: 0, increment: 0 },
    { label: "15 minute", min: 15, sec: 0, increment: 0 },
    { label: "30 minute", min: 30, sec: 0, increment: 0 },
];
export default function Preset({navigation}) {
    const { time, setTime } = useContext(Context);
    const [preset, setPreset] = useState(5);

    const savePreset = () => {
        setTime(preset);
        navigation.navigate("Home");
    }
    return (
        <Screen>
            <View
                style={{
                    flex: 1,
                    backgroundColor: "#fff",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <RadioButtonGroup
                    containerStyle={{ marginBottom: 10 }}
                    selected={preset}
                    onSelected={(value) => setPreset(value)}
                    containerOptionStyle={{ margin: 5 }}
                    radioBackground="blue"
                >
                    {DEFAULT_PRESETS.map((preset) => (
                        <RadioButtonItem
                            key={preset.label}
                            value={preset.min}
                            label={
                                <Text style={{ fontSize: 20 }}>
                                    {preset.label}
                                </Text>
                            }
                        />
                    ))}
                </RadioButtonGroup>

                <View style={{ width: 140 }}>
                    <Button title="Save" onPress={savePreset} />
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    text: {
        fontSize: 16,
    },
});
