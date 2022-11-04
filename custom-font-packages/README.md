# 第一步生成字体数据js
1.把字体放入meshwriter-font/fonts/下
2.修改meshwriter-font/config.js限制转码区间
3.假设字体名称为"PangMenZhengDao"，在meshwriter-font/打开node并执行以下命令
> require("./index")

> convertFontFile({suffix:"ttf",name:"PangMenZhengDao",compress:true})
4.这一步会生成一个pangmenzhengdao.js在meshwriter/fonts/下

# 第二步构建meshwriter
1.修改meshwriter/index.js的前50行内容
2.在meshwriter下npm run build

# 第三步定义d.ts
1.在meshwriter/dist/下新建meshwriter.d.ts并写入以下内容
export declare const MeshWriter