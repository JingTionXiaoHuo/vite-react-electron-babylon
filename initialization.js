const opentype = require("./src/plugin/meshwriter-font/opentype");
const PiP = require("./src/plugin/meshwriter-font/pip");
const MeshWriter = require("./src/plugin/meshwriter-font/meshwriter");
const Glyphin = require("./src/plugin/meshwriter-font/glyphin");
const fs = require("fs");
const root = this;
const config = {
  //默认字符区间不可删除
  "default-coverage"           : [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "0","1","2","3","4","5","6","7","8","9","!","|",'"',"'","#","$","%","&","(",")","*","+",",","-",".","/",
    ":",";","<","=",">","?","@","[","]","^","_"," "," "
 ],

 //需要转化的字体文件目录:相对于initialization.js
 relPathFrom: "./public/font/",
  
 //导出资源目录
 relPathTo: "./src/plugin/meshwriter/dist/",

  //自定义字符区间
  "pangmenzhengdao"            : [
    "成", "都", "天", "府", "重", "庆", "西", "安", "上", "海", "武", "汉", "深", "圳", "南", "京", "杭", "广", "州", "阿", "多", "比", "凡", "云",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "0","1","2","3","4","5","6","7","8","9",
  ],
};

global.PiP = PiP;
global.config_ = config;

global.convertFontFile = function (opt) {
  const options = opt && typeof opt === "object" ? opt : {};
  const suffix = opt.suffix;
  const name = opt.name;
  const dd = opt.dir;
  const sd = opt.subdir;
  const compress = opt.compress === true;
  const subdir = typeof sd === "string" && sd.length > 1 ? sd + "/" : "";
  const dir = typeof dd === "string" && dd.length > 1 ? dd + "/" : "";
  const coverage =
    typeof name === "string"
      ? typeof config[name.toLowerCase()] === "object"
        ? config[name.toLowerCase()]
        : typeof config["default-coverage"] === "object"
        ? config["default-coverage"]
        : ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
      : typeof config["default-coverage"] === "object"
      ? config["default-coverage"]
      : ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  console.log(coverage);

  if (!arguments.length) {
    return "arguments:  suffix , filename [ directory [ subdirectory ] ] ";
  } else {
    fs.readFile(config.relPathFrom + name + "." + suffix, onReadFile);
  }

  function onReadFile(err, data) {
    if (err) {
      console.log(
        "Could not read from '" + config.relPathFrom + name + "." + suffix + "'"
      );
      console.log(err);
    } else {
      let fontName;
      const fontArrayBuffer = convertBuff2AB(data);
      const nativeFont = opentype.parse(fontArrayBuffer, {
        lowMemory: false,
      });
      const glyphin = new Glyphin(nativeFont, coverage);
      let fileText = glyphin.getMeshWriterSeries(compress);
      try {
        fontName = nativeFont.names.fontFamily.en;
      } catch (e) {
        fontName = "font";
      }
      fileText =
        filePre(fontName, nativeFont.outlinesFormat) +
        fileText +
        filePost(fontName);
      const fileBuffer = Buffer.from(fileText);
      fs.mkdir(config.relPathTo, { recursive: true }, (err) => {
        if (err) {
          throw err;
        } else {
          console.log("路径就绪" + config.relPathTo);
        }
      });
      fs.writeFile(
        config.relPathTo + name.toLowerCase() + "." + "js",
        fileBuffer,
        onWriteFile
      );
    }
  }
  function onWriteFile(err) {
    if (err) {
      console.log("无法写入" + config.relPathTo + name + "." + "js");
      console.log(err);
    } else {
      console.log(
        "成功写入" + config.relPathTo + name.toLowerCase() + "." + "js"
      );
    }
  }
};

function convertBuff2AB(buff) {
  var ab = new ArrayBuffer(buff.length),
    vw = new Uint8Array(ab);
  for (var i = 0; i < buff.length; i++) {
    vw[i] = buff[i];
  }
  return ab;
}
function filePre(fontName, format) {
  let line1 =
    "//  " +
    fontName.toUpperCase() +
    "  " +
    fontName.toUpperCase() +
    "  " +
    fontName.toUpperCase() +
    "\n// \n\n";
  if (format === "cff") {
    return (
      line1 +
      "define(\n  [],\n  function(){\n\n    return function(codeList){\n\n      var font={reverseHoles:true,reverseShapes:false},nbsp='\u00A0';\n\n"
    );
  } else {
    return (
      line1 +
      "define(\n  [],\n  function(){\n\n    return function(codeList){\n\n      var font={reverseHoles:false,reverseShapes:true},nbsp='\u00A0';\n\n"
    );
  }
}
function filePost() {
  return "\n      return font;\n    }\n  }\n);\n";
}

convertFontFile({
  suffix: "ttf",
  name: Object.keys(config)[3],
  compress: true,
});
