import React from "react";
import Controller from "../components/Controller";
import CountDown from "../components/CountDown";
import Screen from "../components/Screen";

export default function Home(props) {
    return (
        <Screen>
            <CountDown />
            <Controller />
            <CountDown />
        </Screen>
    );
}
