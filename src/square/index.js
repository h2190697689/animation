import React, { useEffect } from "react";
import "./index.less";

export default function Square() {
    useEffect(() => {
        var mouseDown = false;
        var mousePoint = { x: 0, y: 0 };
        var cubeRotate = { x: 0, y: 0 };
        window.onload = function () {
            document.onmousedown = function (e) {
                mouseDown = true;
                mousePoint.x = e.pageX;
                mousePoint.y = e.pageY;
            };
            document.onmousemove = function (e) {
                if (mouseDown) {
                    const x = e.pageX - mousePoint.x;
                    const y = e.pageY - mousePoint.y;
                    cubeRotate.x += x / 30;
                    cubeRotate.y += y / 30;
                    document.querySelector(
                        ".cube"
                    ).style = `transition:linear;transform:rotateX(${cubeRotate.x}deg) rotateY(${cubeRotate.y}deg)`;
                }
            };
            document.onmouseup = function (e) {
                mouseDown = false;
            };
        };
    }, []);
    return (
        <div className="wrap">
            <div className="cube">
                <div className="front">前</div>
                <div className="back">后</div>
                <div className="left">左</div>
                <div className="right">右</div>
                <div className="top">上</div>
                <div className="bottom">下</div>
            </div>
        </div>
    );
}
