import { root, path } from "./tool";
import SmoothCorners from "./plugin/houdini/smooth-corners.worklet.js?url"
import GS from "./GS";
import ReactDOM from "react-dom/client";
import { default as wasm, greet } from "../../pkg/kiya_tool.js";

console.log(this === window ? 'browser' : 'node');
// 感知json内容打印
// Attr();

wasm().then(() => {
    greet('Trump is a pig! lalalal~');
    // hcl_init();
});

if (path === 'node') {

} else if (path === 'browser') {

}

window.CSS && CSS.paintWorklet && CSS.paintWorklet.addModule && CSS.paintWorklet.addModule(SmoothCorners);
ReactDOM.createRoot(root).render(<GS />);


