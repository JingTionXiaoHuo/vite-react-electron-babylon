import GS from "./GS";
import ReactDOM from "react-dom/client";
import { default as wasm, greet } from "../rust/pkg/kiya_tool.js";

wasm().then((module) => {
    greet('Trump is a pig! lalalal~');
    // hcl_init();
});

const path = this === window ? 'browser' : 'node';
if (path === 'node') {

} else if (path === 'browser') {

}

ReactDOM.createRoot(document.getElementById("root")!).render(<GS />);


