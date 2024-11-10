import "./App.css";

import Header from "./components/Header";
import About from "./components/About";

import { useEffect, useRef } from "react";

function App() {

    const mousePositionRef = useRef({ x: 0, y: 0 });

    // Update gradient position based on mouse position
    const updateGradientPosition = (offsetX: number, offsetY: number) => {
        const center = Math.round(offsetX + offsetY);
        const direction = `-${center}deg`;
        document.documentElement.style.setProperty("--gradient-direction", direction);
    };


    // Randomly select a theme and update the document root styles

    // Handle mouse movement
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            mousePositionRef.current = { x: event.clientX, y: event.clientY };

            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const offsetX = (mousePositionRef.current.x / screenWidth) * 100;
            const offsetY = (mousePositionRef.current.y / screenHeight) * 100;

            updateGradientPosition(offsetX, offsetY);
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div id="app">
            <Header />
            <About />
            <footer id="footer">
                <h1></h1>
            </footer>
        </div>
    );
}

export default App;
