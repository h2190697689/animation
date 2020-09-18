import React, { useState, useEffect } from "react";
import WaterFall from "./waterfall";
import "./less/App.less";

export default function APP() {
    const [distance, setDistance] = useState(0);
    const startTime = Date.now();
    let request;
    const move = (nowTime) => {
        const interval = Date.now() - startTime;
        const time = Math.floor(interval / 1000);
        if (time < 6) {
            console.log(distance);
            setDistance((preDistance) => preDistance + time);
            request && window.cancelAnimationFrame(request);
            request = window.requestAnimationFrame(move);
        } else {
            window.cancelAnimationFrame(request);
        }
    };
    useEffect(() => {
        request = window.requestAnimationFrame(move);
    }, []);
    return (
        <div className="min-wrap">
            <h1 className="title">hejiamin</h1>
            <div
                style={{ transform: `translateX(${distance}px)` }}
                className="item"
            />
            <WaterFall />
        </div>
    );
}
