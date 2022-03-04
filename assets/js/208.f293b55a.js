(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{677:function(s,t,n){"use strict";n.r(t);var a=n(29),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"jenkins插件管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jenkins插件管理"}},[s._v("#")]),s._v(" Jenkins插件管理")]),s._v(" "),n("p",[s._v("Jenkins本身不提供很多功能，我们可以通过使用插件来满足我们的使用。例如从Gitlab拉取代码，使用Maven构建项目等功能需要依靠插件完成。接下来演示如何下载插件。")]),s._v(" "),n("h2",{attrs:{id:"修改jenkins插件下载地址"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改jenkins插件下载地址"}},[s._v("#")]),s._v(" 修改Jenkins插件下载地址"),n("Badge",{attrs:{text:"可选",type:"success"}})],1),s._v(" "),n("p",[s._v("Jenkins国外官方插件地址下载速度非常慢，所以可以修改为国内插件地址： "),n("strong",[s._v("系统管理")]),s._v("->"),n("strong",[s._v("插件管理")]),s._v("，点击"),n("strong",[s._v("可选插件")])]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/2021-06-20_115917.jpg",alt:"Manage Plugins"}})]),s._v(" "),n("p",[s._v("这样做是为了把Jenkins官方的插件列表下载到本地，接着修改地址文件，替换为国内插件地址")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入Jenkins配置目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /var/lib/jenkins/updates\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 备份默认配置文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" default.json default.json.bak\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行替换操作")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/http:\\/\\/updates.jenkinsci.org\\/download/https:\\/\\/mirrors.tuna.tsinghua.edu.cn\\/jenkins/g'")]),s._v(" default.json\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/http:\\/\\/www.google.com/https:\\/\\/www.baidu.com/g'")]),s._v(" default.json\n")])])]),n("p",[s._v("最后，"),n("strong",[s._v("插件管理")]),s._v("点击"),n("strong",[s._v("高级")]),s._v("，把"),n("strong",[s._v("升级站点")]),s._v("改为国内插件下载地址")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json\n")])])]),n("p",[n("img",{attrs:{src:"/img/2021-06-20_123633.jpg",alt:"升级站点"}})]),s._v(" "),n("p",[s._v("点击提交后，重启Jenkins")])])}),[],!1,null,null,null);t.default=e.exports}}]);