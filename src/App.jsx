import React, { useEffect } from "react";
import { useTheme } from "./ThemeContext";
import ThemeToggleButton from "./ThemeToggleButton";
import "./App.css";
import List from "./List";

const App = () => {
    const { theme } = useTheme();

    useEffect(() => {
        document.body.className = theme + "-theme";
    }, [theme]);

    return (
        <div className="app">
            <ThemeToggleButton />
            <List />
        </div>
    );
};

export default App;
