import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import Context from "./app/timer/Context";
import Navigator from "./app/navigation/Navigator";
import { defaultPresets } from "./app/config/presets";

export default function App(props) {
    const [time, setTime] = useState(defaultPresets[3]);
    return (
        <Context.Provider value={{ time, setTime }}>
            <NavigationContainer>
                <Navigator />
            </NavigationContainer>
        </Context.Provider>
    );
}
