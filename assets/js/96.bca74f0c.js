(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{564:function(t,e,i){"use strict";i.r(e);var a=i(29),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"minio-server配置指南"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#minio-server配置指南"}},[t._v("#")]),t._v(" Minio Server配置指南")]),t._v(" "),i("p",[t._v("Minio server在默认情况下会将所有配置信息存到 "),i("code",[t._v("${HOME}/.minio/config.json")]),t._v(" 文件中。 以下部分提供每个字段的详细说明以及如何自定义它们。一个完整的 "),i("code",[t._v("config.json")]),t._v(" 在 "),i("a",{attrs:{href:"https://raw.githubusercontent.com/minio/minio/master/docs/config/config.sample.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),i("OutboundLink")],1)]),t._v(" "),i("h2",{attrs:{id:"配置目录"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#配置目录"}},[t._v("#")]),t._v(" 配置目录")]),t._v(" "),i("p",[t._v("默认的配置目录是 "),i("code",[t._v("${HOME}/.minio")]),t._v("，你可以使用"),i("code",[t._v("—config-dir")]),t._v("命令行选项重写之。 You can override the default configuration directory using "),i("code",[t._v("—config-dir")]),t._v(" command-line option. Minio server在首次启动时会生成一个新的"),i("code",[t._v("config.json")]),t._v("，里面带有自动生成的访问凭据。")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("minio server --config-dir /etc/minio /data\n")])])]),i("h3",{attrs:{id:"证书目录"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#证书目录"}},[t._v("#")]),t._v(" 证书目录")]),t._v(" "),i("p",[t._v("TLS证书存在"),i("code",[t._v("${HOME}/.minio/certs")]),t._v("目录下，你需要将证书放在该目录下来启用"),i("code",[t._v("HTTPS")]),t._v(" 。如果你是一个乐学上进的好青年，这里有一本免费的秘籍传授一你: "),i("a",{attrs:{href:"https://docs.min.io/docs/how-to-secure-access-to-minio-server-with-tls",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何使用TLS安全的访问minio"),i("OutboundLink")],1),t._v(".")]),t._v(" "),i("p",[t._v("以下是一个带来TLS证书的Minio server的目录结构。")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("$ tree ~/.minio\n/home/user1/.minio\n├── certs\n│   ├── CAs\n│   ├── private.key\n│   └── public.crt\n└── config.json\n")])])]),i("h3",{attrs:{id:"配置参数"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#配置参数"}},[t._v("#")]),t._v(" 配置参数")]),t._v(" "),i("h4",{attrs:{id:"版本"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#版本"}},[t._v("#")]),t._v(" 版本")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("version")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[i("em",[t._v("string")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("version")]),t._v("决定了配置文件的格式，任何老版本都会在启动时自动迁移到新版本中。 [请勿手动修改]")])])])]),t._v(" "),i("h4",{attrs:{id:"凭据"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#凭据"}},[t._v("#")]),t._v(" 凭据")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("credential")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}}),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("对象存储和Web访问的验证凭据。")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("credential.accessKey")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[i("em",[t._v("string")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Access key长度最小是5个字符，你可以通过 "),i("code",[t._v("MINIO_ACCESS_KEY")]),t._v("环境变量进行修改")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("credential.secretKey")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[i("em",[t._v("string")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Secret key长度最小是8个字符，你可以通过"),i("code",[t._v("MINIO_SECRET_KEY")]),t._v("环境变量进行修改")])])])]),t._v(" "),i("p",[t._v("示例:")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("export MINIO_ACCESS_KEY=adminexport MINIO_SECRET_KEY=passwordminio server /data\n")])])]),i("h4",{attrs:{id:"区域-region"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#区域-region"}},[t._v("#")]),t._v(" 区域（Region）")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("region")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[i("em",[t._v("string")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("region")]),t._v("描述的是服务器的物理位置，默认是"),i("code",[t._v("us-east-1")]),t._v("（美国东区1）,这也是亚马逊S3的默认区域。你可以通过"),i("code",[t._v("MINIO_REGION")]),t._v(" 环境变量进行修改。如果不了解这块，建议不要随意修改")])])])]),t._v(" "),i("p",[t._v("示例:")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v('export MINIO_REGION="中国华北一区"minio server /data\n')])])]),i("h4",{attrs:{id:"浏览器"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#浏览器"}},[t._v("#")]),t._v(" 浏览器")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("browser")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[i("em",[t._v("string")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("开启或关闭浏览器访问，默认是开启的，你可以通过"),i("code",[t._v("MINIO_BROWSER")]),t._v("环境变量进行修改")])])])]),t._v(" "),i("p",[t._v("示例:")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("export MINIO_BROWSER=offminio server /data\n")])])]),i("h4",{attrs:{id:"通知"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#通知"}},[t._v("#")]),t._v(" 通知")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("notify")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}}),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("通知通过以下方式开启存储桶事件通知，用于lambda计算")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("notify.amqp")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}}),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[i("a",{attrs:{href:"https://docs.min.io/docs/minio-bucket-notification-guide#AMQP",target:"_blank",rel:"noopener noreferrer"}},[t._v("通过AMQP发布Minio事件"),i("OutboundLink")],1)])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("notify.mqtt")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}}),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[i("a",{attrs:{href:"https://docs.min.io/docs/minio-bucket-notification-guide#MQTT",target:"_blank",rel:"noopener noreferrer"}},[t._v("通过MQTT发布Minio事件"),i("OutboundLink")],1)])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("notify.elasticsearch")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}}),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[i("a",{attrs:{href:"https://docs.min.io/docs/minio-bucket-notification-guide#Elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[t._v("通过Elasticsearch发布Minio事件"),i("OutboundLink")],1)])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("notify.redis")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}}),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[i("a",{attrs:{href:"https://docs.min.io/docs/minio-bucket-notification-guide#Redis",target:"_blank",rel:"noopener noreferrer"}},[t._v("通过Redis发布Minio事件"),i("OutboundLink")],1)])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("notify.nats")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}}),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[i("a",{attrs:{href:"https://docs.min.io/docs/minio-bucket-notification-guide#NATS",target:"_blank",rel:"noopener noreferrer"}},[t._v("通过NATS发布Minio事件"),i("OutboundLink")],1)])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("notify.postgresql")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}}),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[i("a",{attrs:{href:"https://docs.min.io/docs/minio-bucket-notification-guide#PostgreSQL",target:"_blank",rel:"noopener noreferrer"}},[t._v("通过PostgreSQL发布Minio事件"),i("OutboundLink")],1)])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("notify.kafka")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}}),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[i("a",{attrs:{href:"https://docs.min.io/docs/minio-bucket-notification-guide#apache-kafka",target:"_blank",rel:"noopener noreferrer"}},[t._v("通过Apache Kafka发布Minio事件"),i("OutboundLink")],1)])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("notify.webhook")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}}),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[i("a",{attrs:{href:"https://docs.min.io/docs/minio-bucket-notification-guide#webhooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("通过Webhooks发布Minio事件"),i("OutboundLink")],1)])])])]),t._v(" "),i("h2",{attrs:{id:"了解更多"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#了解更多"}},[t._v("#")]),t._v(" 了解更多")]),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://docs.minio.io/docs/minio-quickstart-guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("Minio Quickstart Guide"),i("OutboundLink")],1)])]),t._v(" "),i("blockquote",[i("p",[t._v("原文: https://docs.min.io/docs/minio-server-configuration-guide.html")])])])}),[],!1,null,null,null);e.default=n.exports}}]);