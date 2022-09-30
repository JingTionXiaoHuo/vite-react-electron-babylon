import { useState, useEffect } from "react";
import worklet from "./script/paintWorklet";
import Btn from "./script/components/btn";
import BabylonBox from "./script/components/babylon";
import Version_info from "./script/components/version_info";
// import Attr from "./script/attr";
import { default as wasm, greet } from "../public/pkg/kiya_tool.js";

worklet();//导入自定义paintAPI

// wasm内容执行
wasm().then((module) => {
  greet('Trump is a pig! lalalal~');
  // hcl_init();
});

type StateType = {
  ui_class: string;
};

type propType = {};

interface GS {
  state: StateType;
  props: propType;
}

export default function GS(props: propType) {

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
    if (ui_class === "Play") {
      window.dispatchEvent(playOrHidden);
    }
    return ui_class === "Play" ? "Hidden" : "Play";
  }

  useEffect(() => {
    const root = document.getElementById('root')!;

    if (document.getElementById('BannerBox')) {
      root.classList.add('fullScreen');
    }

    // 告知electron的预加载脚本："GS组件加载完毕"
    window.dispatchEvent(reactDomRender);

    // 感知json内容打印
    // Attr();

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

    return () => {
      // 组件卸载时需要做的事
    };
  }, []);

  return (
    <div id="GS" className={'default ' + ui_class}>
      <BabylonBox />
      {/* <Banner /> */}
      <Version_info />
      <Btn
        onClick={() => setui_class(class_switch())}
        content={ui_class}
      />
    </div>
  );
}

