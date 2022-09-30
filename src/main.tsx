import GS from "./GS";
import ReactDOM from "react-dom/client";
import configData from "../config.json";

// let module_list = [];
const path = this === window ? 'browser' : 'node';
if (path === 'node') {//如果当前为浏览器环境
  // 浏览器环境下js无权修改文件，只根据配置文件变更应用内容
  for (let i = 0; i < Object.keys(configData.page).length; i++) {
    // ./script/
    const module_name = Object.keys(configData.page)[i];
    console.log("var " + module_name + " = " + "import('./script/components/" + module_name + "')")
          //  eval("var " + module_name + " = " + "import('./script/components/" + module_name + "')");
    // module_list.push(eval(module_name));
  }
  
} else if (path === 'browser') {
  
}

ReactDOM.createRoot(document.getElementById("root")!).render(<GS />);

// console.log(module_list);

// export default{module_list}

