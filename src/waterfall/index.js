import React, { useState } from "react";
import "./fall.less";

export default function WaterFall() {
    const list = Array.from({ length: 7 }, (item, index) => {
        return `/images/min${index}.jpg`;
    });
    return (
        <div className="water-fall">
            {list.map((item, index) => {
                return <img key={index} src={item} className="fall-image" />;
            })}
        </div>
    );
}
