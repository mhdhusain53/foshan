import React from "react";
import App from "./Components/App"
import { createRoot } from 'react-dom/client';
import './input.css';

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App tab="home" />);