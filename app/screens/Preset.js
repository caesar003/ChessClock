import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import Context from "../timer/Context";
import Screen from "../components/Screen";
import { defaultPresets as DEFAULT_PRESETS } from "../config/presets";

export default function Preset({ navigation }) {
    const { time, setTime } = useContext(Context);
    const [obj, setObj] = useState(DEFAULT_PRESETS[3]);

    const savePreset = () => {
        setTime(obj);
        navigation.navigate("Home");
    };
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
                    selected={obj}
                    onSelected={(value) => setObj(value)}
                    containerOptionStyle={{ margin: 5 }}
                    radioBackground="blue"
                >
                    {DEFAULT_PRESETS.map((preset) => (
                        <RadioButtonItem
                            key={preset.label}
                            value={preset}
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
