import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Button({ iconName, fn }) {
    return (
        <TouchableOpacity onPress={fn}>
            <MaterialIcons name={iconName} size={28} />
        </TouchableOpacity>
    );
}
