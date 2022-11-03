import { useState, useEffect } from "react";
import * as Components from "./script/components";
import { root,resize } from "./script/lib";

export default function GS() {
  const [uiState, setUiState] = useState("Play");

  let classReplace = () => {
    return uiState === "Play" ? "Hidden" : "Play";
  }

  // 监听F11事件
  window.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.code == "F11") {
      e.preventDefault();
      root.classList.contains('fullScreen') ? root.classList.remove('fullScreen') : root.classList.add('fullScreen');
      root.dispatchEvent(resize);
    }
  })

  useEffect(() => {
    // 初始化
    window.dispatchEvent(new CustomEvent("ReactDomRender", { detail: "base", }));

    return () => {
      // 组件卸载时需要做的事
    };
  }, []);

  return (
    <div id="GS" className={'default ' + uiState}>
      {/* <Components.BabylonBox /> */}
      <Components.BannerBox />
      <Components.VersionInfo />
      <Components.Menu
        onClick={() => setUiState(classReplace())}
        content={uiState}
      />
    </div>
  );
}

