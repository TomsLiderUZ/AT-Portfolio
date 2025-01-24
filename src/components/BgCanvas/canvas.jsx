import React, { useEffect } from "react";
import { BgCanvas } from "./style";

function Canvas() {

    const elementConfig = {
        "query-text": { size: 0.04, type: "fill", color: "aqua" },
        "query-link": { size: 0.04, type: "fill", color: "blue" },
        "query-button": { size: 0.06, type: "border", color: "green", borderSize: 2 },
        "query-img": { size: 0.04, type: "fill", color: "white" },
        "query-form": { size: 0.04, type: "fill", color: "purple" },
        "query-animation": { size: 0.04, type: "fill", color: "yellow" },
        "query-menu": { size: 0.09, type: "fill", color: "orangered",}
    };

    const pathConfig = {
        "/g/home": { size: 0.02, type: "fill", color: "orange" },
        "/g/about": { size: 0.02, type: "fill", color: "blue" },
        "/g/skills": { size: 0.02, type: "fill", color: "green" },
        "/g/education": { size: 0.02, type: "fill", color: "red" },
        "/g/work": { size: 0.02, type: "fill", color: "purple" },
        "/g/contact": { size: 0.02, type: "fill", color: "yellow" },
        "*": { size: 0.1, type: "fill", color: "black" }
    };

    useEffect(() => {
        const canvas = document.getElementById("bgCanvas");
        const ctx = canvas.getContext("2d");

        const drawCircle = (x, y, className, path) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
            ctx.beginPath();
            const config = elementConfig[className] || pathConfig[path] || pathConfig["*"];
            const radius = Math.min(window.innerWidth, window.innerHeight) * config.size;
            const fillStyle = config.type === "fill" ? config.color : "transparent";
            const strokeStyle = config.type === "border" ? config.color : "transparent";
            const lineWidth = config.type === "border" ? config.borderSize : 0;

            ctx.arc(x, y, radius, 0, 2 * Math.PI, false); // Draw a circle
            ctx.fillStyle = fillStyle;
            ctx.fill();
            if (lineWidth > 0) {
                ctx.strokeStyle = strokeStyle;
                ctx.lineWidth = lineWidth;
                ctx.stroke();
            }
            ctx.closePath();
        };

        let animationFrameId;

        const handleMouseMove = (event) => {
            const x = event.clientX;
            const y = event.clientY;
            const targetClass = event.target.classList.value.split(' ').find(cls => elementConfig[cls]);
            const path = window.location.pathname;
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(() => drawCircle(x, y, targetClass, path));
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        document.body.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);

        // Set initial canvas size
        handleResize();

        return () => {
            document.body.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <BgCanvas id="bgCanvas" />
    );
}

export default Canvas;
