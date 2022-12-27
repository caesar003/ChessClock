import React, { useContext, useState } from "react";
import Controller from "../components/Controller";
import CountDown from "../components/CountDown";
import Screen from "../components/Screen";
import Context from "../timer/Context";
import { defaultPresets } from "../config/presets";

const DEFAULT_TIME = defaultPresets[3];
export default function Home({ navigation }) {
    const { time, setTime } = useContext(Context);
    const [isPlaying, setIsPlaying] = useState(false);
    const [sideToMove, setSideToMove] = useState(0);

    const onPlay = () => {
        setIsPlaying(true);
    };
    const onPause = () => {
        setIsPlaying(false);
    };

    const onReset = () => {
        setTime(Math.floor(Math.random() * 10));
        setTimeout(() => setTime(DEFAULT_TIME), 1);
        setIsPlaying(false);
        setSideToMove(0);
    };
    const onSwitchSide = (idx) => {
        if (isPlaying) {
            if (idx !== sideToMove) return;
            setIsPlaying(false);
            setSideToMove(sideToMove ? 0 : 1);
            setIsPlaying(true);
        } else {
            setSideToMove(idx ? 0 : 1);
            setIsPlaying(true);
        }
    };

    const onPresetClick = () => {
        setIsPlaying(false);
        navigation.navigate("Preset");
    };

    return (
        <Screen>
            <CountDown
                minutes={time.min}
                isPlaying={isPlaying && !sideToMove}
                idx={0}
                onSwitchSide={onSwitchSide}
                increment={time.increment}
            />
            <Controller
                onPlay={onPlay}
                onPause={onPause}
                isPlaying={isPlaying}
                onReset={onReset}
                onPresetClick={onPresetClick}
            />
            <CountDown
                minutes={time.min}
                isPlaying={isPlaying && !!sideToMove}
                idx={1}
                onSwitchSide={onSwitchSide}
                increment={time.increment}
            />
        </Screen>
    );
}
