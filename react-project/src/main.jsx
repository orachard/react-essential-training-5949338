import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const [first, second, third, fourth] = ["Dog", "Cat", "Elephant", "Giraffe"];
console.log(fourth);

createRoot(document.getElementById("root")).render(<App />);
