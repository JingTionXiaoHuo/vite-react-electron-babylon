import { useState, useEffect } from "react";
import * as Components from "./script/components";

export default function GS() {
  const [uiState, setUiState] = useState("Play");
  const playOrHidden = new CustomEvent("playOrHidden", { detail: uiState, });
  const reactDomRender = new CustomEvent("ReactDomRender", { detail: "base", });
  const resize = new CustomEvent("resize", { detail: "change", });

  let classReplace = function () {
    uiState === "Play" && window.dispatchEvent(playOrHidden);
    return uiState === "Play" ? "Hidden" : "Play";
  }

  useEffect(() => {

    const root = document.getElementById('root')!;

    // 初始化
    window.dispatchEvent(reactDomRender);
    window.dispatchEvent(resize);

    // 监听F11事件
    window.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.code == "F11") {
        e.preventDefault();
        !root.classList.contains('fullScreen') ? root.classList.add('fullScreen') : root.classList.remove('fullScreen');
        window.dispatchEvent(resize);
      }
    })

    return () => {
      // 组件卸载时需要做的事
    };
  }, []);

  return (
    <div id="GS" className={'default ' + uiState}>
      <Components.BabylonBox />
      {/* <Components.BannerBox /> */}
      <Components.VersionInfo />
      <Components.Menu
        onClick={() => setUiState(classReplace())}
        content={uiState}
      />
    </div>
  );
}

