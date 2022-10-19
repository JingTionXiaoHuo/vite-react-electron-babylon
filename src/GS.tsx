import { useState, useEffect } from "react";
import * as Components from "./script/components";

export default function GS() {
  const [ui_class, setui_class] = useState("Play");
  const playOrHidden = new CustomEvent("playOrHidden", { detail: ui_class, });
  const reactDomRender = new CustomEvent("ReactDomRender", { detail: "base", });
  const resize = new CustomEvent("resize", { detail: "change", });

  let class_switch = function () {
    ui_class === "Play" && window.dispatchEvent(playOrHidden);
    return ui_class === "Play" ? "Hidden" : "Play";
  }

  useEffect(() => {

    const root = document.getElementById('root')!;

    // 初始化
    window.dispatchEvent(reactDomRender);
    window.dispatchEvent(resize);

    // 感知json内容打印
    // Attr();

    // 监听F11事件
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
      <Components.BabylonBox />
      {/* <Components.BannerBox /> */}
      <Components.VersionInfo />
      <Components.Menu
        onClick={() => setui_class(class_switch())}
        content={ui_class}
      />
    </div>
  );
}

