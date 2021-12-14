import ReactDOM from "react-dom";
import Header from "./Header";

ReactDOM.hydrate(
    <Header />,
    document.getElementById("header")
);