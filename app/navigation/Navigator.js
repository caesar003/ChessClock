import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Preset from "../screens/Preset";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default function Navigator(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Preset" component={Preset} />
        </Stack.Navigator>
    );
}
