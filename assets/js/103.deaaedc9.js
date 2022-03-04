(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{572:function(t,s,e){"use strict";e.r(s);var a=e(29),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"使用-minio-服务器设置-nginx-代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-minio-服务器设置-nginx-代理"}},[t._v("#")]),t._v(" 使用 MinIO 服务器设置 Nginx 代理")]),t._v(" "),e("p",[t._v("Nginx 是一个开源的 Web 服务器和一个反向代理服务器。")]),t._v(" "),e("p",[t._v("在这个秘籍中，我们将学习如何使用 MinIO Server 设置 Nginx 代理。")]),t._v(" "),e("h2",{attrs:{id:"_1-先决条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-先决条件"}},[t._v("#")]),t._v(" 1. 先决条件")]),t._v(" "),e("p",[t._v("从"),e("a",{attrs:{href:"https://docs.min.io/docs/minio-quickstart-guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v("安装 MinIO 服务器。")]),t._v(" "),e("h2",{attrs:{id:"_2-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装"}},[t._v("#")]),t._v(" 2. 安装")]),t._v(" "),e("p",[t._v("从"),e("a",{attrs:{href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v("安装 Nginx 。")]),t._v(" "),e("h2",{attrs:{id:"_3-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置"}},[t._v("#")]),t._v(" 3. 配置")]),t._v(" "),e("h3",{attrs:{id:"代理所有请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代理所有请求"}},[t._v("#")]),t._v(" 代理所有请求")]),t._v(" "),e("p",[t._v("将以下内容添加为文件"),e("code",[t._v("/etc/nginx/sites-enabled")]),t._v("，例如"),e("code",[t._v("/etc/nginx/sites-enables/minio")]),t._v(" ，并删除"),e("code",[t._v("default")]),t._v("同一目录中的现有文件。")]),t._v(" "),e("div",{staticClass:"language-nginx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" example.com")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# To allow special characters in headers")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ignore_invalid_headers")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("off")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Allow any size file to be uploaded.")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set to a value such as 1000m; to restrict file size to a specific value")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("client_max_body_size")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# To disable buffering")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_buffering")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("off")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X-Real-IP "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X-Forwarded-For "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_add_x_forwarded_for")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X-Forwarded-Proto "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$scheme")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Host "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_host")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_connect_timeout")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Default is HTTP/1, keepalive is only enabled in HTTP/1.1")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_http_version")]),t._v(" 1.1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Connection "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chunked_transfer_encoding")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("off")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" http://localhost:9000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If you are using docker-compose this would be the hostname i.e. minio")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Health Check endpoint might go here. See https://www.nginx.com/resources/wiki/modules/healthcheck/")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /minio/health/live;")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("笔记：")]),t._v(" "),e("ul",[e("li",[t._v("将 example.com 替换为您自己的主机名。")]),t._v(" "),e("li",[t._v("替换"),e("code",[t._v("http://localhost:9000")]),t._v(" 为您自己的服务器名称。")]),t._v(" "),e("li",[t._v("添加"),e("code",[t._v("client_max_body_size 1000m;")]),t._v("的"),e("code",[t._v("http")]),t._v("情况下，为了能够上传大文件-只需相应地调整值。默认值"),e("code",[t._v("1m")]),t._v("对于大多数场景来说太低了。要禁用对客户端请求正文大小的检查，请设置"),e("code",[t._v("client_max_body_size")]),t._v("为"),e("code",[t._v("0")]),t._v("。")]),t._v(" "),e("li",[t._v("Nginx 默认缓冲响应。要禁止 Nginx 将 MinIO 响应缓冲到临时文件，请设置"),e("code",[t._v("proxy_buffering off;")]),t._v(". 这将改善客户端请求的第一个字节的时间。")]),t._v(" "),e("li",[t._v("Nginx 默认不允许特殊字符。设置"),e("code",[t._v("ignore_invalid_headers off;")]),t._v("为允许带有特殊字符的标题。")])]),t._v(" "),e("h3",{attrs:{id:"基于桶的代理请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于桶的代理请求"}},[t._v("#")]),t._v(" 基于桶的代理请求")]),t._v(" "),e("p",[t._v("如果您想从同一个 nginx 端口为 Web 应用程序和 MinIO 提供服务，那么您可以使用基于路径的路由基于存储桶名称代理 MinIO 请求。对于 nginx，它使用该"),e("code",[t._v("location")]),t._v("指令，该指令还支持基于对象键模式匹配的代理拆分。")]),t._v(" "),e("div",{staticClass:"language-nginx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Proxy requests to the bucket "photos" to MinIO server running on port 9000')]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /photos/")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X-Real-IP "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X-Forwarded-For "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_add_x_forwarded_for")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X-Forwarded-Proto "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$scheme")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Host "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_host")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_connect_timeout")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Default is HTTP/1, keepalive is only enabled in HTTP/1.1")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_http_version")]),t._v(" 1.1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Connection "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chunked_transfer_encoding")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("off")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" http://localhost:9000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Proxy any other request to the application server running on port 9001")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X-Real-IP "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X-Forwarded-For "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_add_x_forwarded_for")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X-Forwarded-Proto "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$scheme")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Host "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_host")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_connect_timeout")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Default is HTTP/1, keepalive is only enabled in HTTP/1.1")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_http_version")]),t._v(" 1.1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Connection "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chunked_transfer_encoding")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("off")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" http://localhost:9001")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"_4-步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-步骤"}},[t._v("#")]),t._v(" 4. 步骤")]),t._v(" "),e("h3",{attrs:{id:"第一步-启动minio服务器。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一步-启动minio服务器。"}},[t._v("#")]),t._v(" 第一步：启动MinIO服务器。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("minio server /mydatadir\n")])])]),e("h3",{attrs:{id:"第-2-步-重启-nginx-服务器。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-2-步-重启-nginx-服务器。"}},[t._v("#")]),t._v(" 第 2 步：重启 Nginx 服务器。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" nginx restart\n")])])]),e("h2",{attrs:{id:"进一步探索"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进一步探索"}},[t._v("#")]),t._v(" 进一步探索")]),t._v(" "),e("p",[t._v("有关各种 MinIO 和 Nginx 配置选项，请参阅"),e("a",{attrs:{href:"https://www.nginx.com/blog/enterprise-grade-cloud-storage-nginx-plus-minio/",target:"_blank",rel:"noopener noreferrer"}},[t._v("此博客文章"),e("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);s.default=n.exports}}]);