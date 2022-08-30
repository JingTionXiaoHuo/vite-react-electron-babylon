import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import worklet from "./script/paintWorklet";
import Btn from "./script/components/btn";
import BabylonBox from "./script/components/BabylonBox";
import Banner from "./script/components/Banner";
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

  const resize = new CustomEvent("resize", {
    detail: "change",
  });

  function class_switch() {
    window.dispatchEvent(playOrHidden);
    return ui_class === "Play" ? "Hidden" : "Play";
  }

  useEffect(() => {
    const root = document.getElementById('root')!;

    // 记录运行时长
    const playTime = setInterval((): void => {
      settime((prevCount) => {
        return prevCount + 1;
      });
    }, 1000);

    // 告知electron的预加载脚本："GS组件加载完毕"
    window.dispatchEvent(reactDomRender);

    // 感知json内容打印
    Attr();

    // wasm内容执行
    wasm().then((module) => {
      greet('Trump is a pig! lalalal~');
      // hcl_init();
    });

    // 添加全局监听事件
    window.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.code == "F11") {
        e.preventDefault();
        if (!root.classList.contains('fullScreen')) {
          root.classList.add('fullScreen');
        } else {
          root.classList.remove('fullScreen');
        }
        window.dispatchEvent(resize);
      }
    })

    return function clear() {
      clearInterval(playTime);
    };
  }, []);

  return (
    <div id="GS" className={'default ' + ui_class}>
      {/* <BabylonBox /> */}
      <Banner />
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
