import React, { useState } from "react";
import Controller from "../components/Controller";
import CountDown from "../components/CountDown";
import Screen from "../components/Screen";

const DEFAULT_TIME = 5;
export default function Home(props) {
    const [time, setTime] = useState(DEFAULT_TIME);
    const [isPlaying, setIsPlaying] = useState(true);
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

    return (
        <Screen>
            <CountDown
                minutes={time}
                isPlaying={isPlaying && !sideToMove}
                idx={0}
                onSwitchSide={onSwitchSide}
            />
            <Controller
                onPlay={onPlay}
                onPause={onPause}
                isPlaying={isPlaying}
                onReset={onReset}
            />
            <CountDown
                minutes={time}
                isPlaying={isPlaying && !!sideToMove}
                idx={1}
                onSwitchSide={onSwitchSide}
            />
        </Screen>
    );
}
