import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import worklet from "./script/paintWorklet";
import Btn from "./script/components/btn";
import BabylonBox from "./script/components/BabylonBox";
import Attr from "./script/attr";
import { default as wasm, hcl_init, greet } from "../public/pkg/kiya_tool.js";

worklet();//导入自定义paintAPI

type StateType = {
  time: number;
  ui_class: string;
};

type propType = {};

interface GS {
  state: StateType;
  props: propType;
}

function GS(props: propType) {

  const [time, settime] = useState(0);
  const [ui_class, setui_class] = useState("Play");

  const playOrHidden = new CustomEvent("playOrHidden", {
    detail: ui_class,
  });

  const reactDomRender = new CustomEvent("ReactDomRender", {
    detail: "base",
  });

  function class_switch() {
    window.dispatchEvent(playOrHidden);
    return ui_class === "Play" ? "Hidden" : "Play";
  }

  useEffect(() => {
    // 添加定时器记录运行时长
    const playTime = setInterval((): void => {
      settime((prevCount) => {
        return prevCount + 1;
      });
    }, 1000);

    // 触发'ReactDomRender',electron的预加载脚本如果正常执行则会打印"监听到ReactDomRender,GS组件加载完毕"
    window.dispatchEvent(reactDomRender);

    Attr();

    wasm().then((module) => {
      greet('Trump is a pig! lalalal~');
      hcl_init();
    });

    return function clear() {
      clearInterval(playTime);
    };
  }, []);

  return (
    <div id="GS" className={ui_class}>
      <BabylonBox />
      <div className="info">
        Node.js: <span id="node-version"></span>
        <br />
        Chromium: <span id="chrome-version"></span>
        <br />
        Electron: <span id="electron-version"></span>
        <br />
        已运行&nbsp;:&nbsp;&nbsp;{time}s
        <br />
      </div>
      <Btn
        onClick={() => setui_class(class_switch())}
        content={ui_class}
      />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<GS />);
