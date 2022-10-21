import { root, path, SmoothCorners } from "./script/lib";
import GS from "./GS";
import ReactDOM from "react-dom/client";
import { default as wasm, greet } from "../rust/pkg/kiya_tool.js";


// registerPaint("smooth-corners", SmoothCorners);
// PaintWorkletGlobalScope.registerPaint("smooth-corners", SmoothCorners)

// 感知json内容打印
// Attr();

wasm().then((module) => {
    greet('Trump is a pig! lalalal~');
    // hcl_init();
});

if (path === 'node') {

} else if (path === 'browser') {

}

ReactDOM.createRoot(root).render(<GS />);


