// 向指定的dom中插入环境信息

window.addEventListener("ReactDomRender", () => {
  console.log("监听到ReactDomRender,GS组件加载完毕");
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };
  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type]);
  }

  // 添加与electron主进程通信的ipc模块
  try {
    let ipcRenderer = require("electron").ipcRenderer;
    
    //点击穿透
    let root = document.getElementById("root");
    root.onmouseenter = function () {
      ipcRenderer.send("huanyuan", "huanyuan");
    };
    root.onmouseleave = function () {
      ipcRenderer.send("chuantou", "chuantou");
    };

    //最小化
    function min() {
      //发送最小化命令
      ipcRenderer.send("window-min", "window-min");
    }
  } catch (error) {
    if (error instanceof EvalError) {
      console.log("EvalError");
    } else if (error instanceof RangeError) {
      console.log("RangeError");
    } else if (error instanceof ReferenceError) {
      console.log("ReferenceError");
    } else if (error instanceof SyntaxError) {
      console.log("SyntaxError");
    } else if (error instanceof TypeError) {
      console.log("TypeError");
    } else if (error instanceof URIError) {
      console.log("URIError");
    }
  }
});
