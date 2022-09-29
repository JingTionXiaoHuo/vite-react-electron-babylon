import GS from "./GS";
import ReactDOM from "react-dom/client";
import configData from "../config.json";


for (let i = 0; i < Object.keys(configData.page).length; i++) {

  const module_name = Object.keys(configData.page)[i];

}

ReactDOM.createRoot(document.getElementById("root")!).render(<GS />);
