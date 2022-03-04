(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{504:function(s,t,a){"use strict";a.r(t);var e=a(29),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"centos-7-配置静态ip和动态ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-7-配置静态ip和动态ip"}},[s._v("#")]),s._v(" CentOS 7 配置静态ip和动态ip")]),s._v(" "),a("p",[s._v("有关于centos7获取IP地址的方法主要有两种，1：动态获取ip；2：设置静态IP地址")]),s._v(" "),a("p",[s._v("在配置网络之前我们先要知道centos的网卡名称是什么，centos7不再使用ifconfig命令，可通过命令"),a("code",[s._v("ip addr")]),s._v("查看，如图，网卡名为ens32，是没有IP地址的\n编辑网络配置文件之前，先查看自己的网卡名称，我的是"),a("code",[s._v("ens192")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ip addr")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": lo: "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("LOOPBACK,UP,LOWER_UP"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536")]),s._v(" qdisc noqueue state UNKNOWN group default qlen "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1/8 scope "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" lo\n       valid_lft forever preferred_lft forever\n    inet6 ::1/128 scope "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" \n       valid_lft forever preferred_lft forever\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(": ens192: "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("BROADCAST,MULTICAST,UP,LOWER_UP"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),s._v(" qdisc mq state UP group default qlen "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n    link/ether 00:0c:29:39:a7:f7 brd ff:ff:ff:ff:ff:ff\n    inet "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.17")]),s._v(".8.230/16 brd "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.17")]),s._v(".255.255 scope global noprefixroute dynamic ens192\n       valid_lft 85701sec preferred_lft 85701sec\n    inet6 fe80::6f32:b40:a205:a076/64 scope "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" noprefixroute \n       valid_lft forever preferred_lft forever\n")])])]),a("h2",{attrs:{id:"配置动态ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置动态ip"}},[s._v("#")]),s._v(" 配置动态ip")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("前提是你的路由器已经开启了DHCP")])]),s._v(" "),a("h3",{attrs:{id:"修改网络配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改网络配置"}},[s._v("#")]),s._v(" 修改网络配置")]),s._v(" "),a("p",[s._v("修改网卡配置文件 ("),a("code",[s._v("ens192")]),s._v("为网卡名称)")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/sysconfig/network-scripts/ifcfg-ens192\n")])])]),a("p",[s._v("动态获取IP地址需要修改两处地方即可")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("bootproto=dhcp")])]),s._v(" "),a("li",[a("strong",[s._v("onboot=yes")])])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('TYPE="Ethernet"\nPROXY_METHOD="none"\nBROWSER_ONLY="no"\nBOOTPROTO="dhcp"\nDEFROUTE="yes"\nIPV4_FAILURE_FATAL="no"\nIPV6INIT="yes"\nIPV6_AUTOCONF="yes"\nIPV6_DEFROUTE="yes"\nIPV6_FAILURE_FATAL="no"\nIPV6_ADDR_GEN_MODE="stable-privacy"\nNAME="ens192"\nUUID="fcc9095d-1ce4-421c-a2ca-a38e74b9622e"\nDEVICE="ens192"\nONBOOT="yes"\n')])])]),a("h3",{attrs:{id:"重启网络服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重启网络服务"}},[s._v("#")]),s._v(" 重启网络服务")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl restart network.service\n")])])]),a("p",[s._v("这样动态配置IP地址就设置好了，这个时候再查看一下ip addr 就可以看到已经获取了IP地址，且可以上网（ping 百度）")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ip addr")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": lo: "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("LOOPBACK,UP,LOWER_UP"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536")]),s._v(" qdisc noqueue state UNKNOWN group default qlen "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1/8 scope "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" lo\n       valid_lft forever preferred_lft forever\n    inet6 ::1/128 scope "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" \n       valid_lft forever preferred_lft forever\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(": ens192: "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("BROADCAST,MULTICAST,UP,LOWER_UP"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),s._v(" qdisc mq state UP group default qlen "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n    link/ether 00:0c:29:39:a7:f7 brd ff:ff:ff:ff:ff:ff\n    inet "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.100/16 brd "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.17")]),s._v(".255.255 scope global noprefixroute dynamic ens192\n       valid_lft 85112sec preferred_lft 85112sec\n    inet6 fe80::6f32:b40:a205:a076/64 scope "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" noprefixroute \n       valid_lft forever preferred_lft forever\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ping www.baidu.com")]),s._v("\nPING www.a.shifen.com "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.101")]),s._v(".49.11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("84")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" bytes of data.\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.101")]),s._v(".49.11 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.101")]),s._v(".49.11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("47")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24.6")]),s._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.101")]),s._v(".49.11 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.101")]),s._v(".49.11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("47")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24.4")]),s._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.101")]),s._v(".49.11 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.101")]),s._v(".49.11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("47")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24.5")]),s._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.101")]),s._v(".49.11 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.101")]),s._v(".49.11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("47")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24.5")]),s._v(" ms\n^C\n--- www.a.shifen.com "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" statistics ---\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" packets transmitted, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" received, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% packet loss, "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" 3004ms\nrtt min/avg/max/mdev "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24.408")]),s._v("/24.530/24.600/0.206 ms\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])])]),a("h2",{attrs:{id:"配置静态ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置静态ip"}},[s._v("#")]),s._v(" 配置静态IP")]),s._v(" "),a("p",[s._v("设置静态IP地址与动态IP差不多，也是要修改网卡配置文件。("),a("code",[s._v("ens192")]),s._v("为网卡名称)")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/sysconfig/network-scripts/ifcfg-ens192\n")])])]),a("ul",[a("li",[a("strong",[s._v("bootproto=static")])]),s._v(" "),a("li",[a("strong",[s._v("onboot=yes")])])]),s._v(" "),a("p",[s._v("在最后加上几行，IP地址、子网掩码、网关、dns服务器")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IPADDR=192.168.1.100\nNETMASK=255.255.255.0\nGATEWAY=192.168.1.1\nDNS1=114.114.114.114\nDNS2=8.8.8.8\n")])])]),a("h3",{attrs:{id:"重启网络服务-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重启网络服务-2"}},[s._v("#")]),s._v(" 重启网络服务")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl restart network.service\n")])])]),a("h3",{attrs:{id:"完整配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完整配置"}},[s._v("#")]),s._v(" 完整配置")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('[root@localhost ~]# cat /etc/sysconfig/network-scripts/ifcfg-ens192 \nTYPE="Ethernet"\nPROXY_METHOD="none"\nBROWSER_ONLY="no"\nBOOTPROTO="static"\nDEFROUTE="yes"\nIPV4_FAILURE_FATAL="no"\nIPV6INIT="yes"\nIPV6_AUTOCONF="yes"\nIPV6_DEFROUTE="yes"\nIPV6_FAILURE_FATAL="no"\nIPV6_ADDR_GEN_MODE="stable-privacy"\nNAME="ens192"\nUUID="fcc9095d-1ce4-421c-a2ca-a38e74b9622e"\nDEVICE="ens192"\nONBOOT="yes"\nIPADDR=192.168.1.100\nNETMASK=255.255.255.0\nGATEWAY=192.168.1.1\nDNS1=114.114.114.114\nDNS2=8.8.8.8\n')])])]),a("h3",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ip addr")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": lo: "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("LOOPBACK,UP,LOWER_UP"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536")]),s._v(" qdisc noqueue state UNKNOWN group default qlen "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1/8 scope "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" lo\n       valid_lft forever preferred_lft forever\n    inet6 ::1/128 scope "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" \n       valid_lft forever preferred_lft forever\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(": ens192: "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("BROADCAST,MULTICAST,UP,LOWER_UP"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),s._v(" qdisc mq state UP group default qlen "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n    link/ether 00:0c:29:39:a7:f7 brd ff:ff:ff:ff:ff:ff\n    inet "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.100/16 brd "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.17")]),s._v(".255.255 scope global noprefixroute dynamic ens192\n       valid_lft 85112sec preferred_lft 85112sec\n    inet6 fe80::6f32:b40:a205:a076/64 scope "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" noprefixroute \n       valid_lft forever preferred_lft forever\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ping www.baidu.com")]),s._v("\nPING www.a.shifen.com "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.101")]),s._v(".49.11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("84")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" bytes of data.\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.101")]),s._v(".49.11 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.101")]),s._v(".49.11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("47")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24.6")]),s._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.101")]),s._v(".49.11 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.101")]),s._v(".49.11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("47")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24.4")]),s._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.101")]),s._v(".49.11 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.101")]),s._v(".49.11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("47")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24.5")]),s._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.101")]),s._v(".49.11 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.101")]),s._v(".49.11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("47")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24.5")]),s._v(" ms\n^C\n--- www.a.shifen.com "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" statistics ---\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" packets transmitted, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" received, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% packet loss, "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" 3004ms\nrtt min/avg/max/mdev "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24.408")]),s._v("/24.530/24.600/0.206 ms\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);