(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{573:function(t,o,e){"use strict";e.r(o);var i=e(29),n=Object(i.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"minio部署快速入门"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#minio部署快速入门"}},[t._v("#")]),t._v(" Minio部署快速入门")]),t._v(" "),e("p",[t._v("Minio是一个[云原生](https://baike.baidu.com/item/Cloud Native/19865304?fr=aladdin)的应用程序，旨在在多租户环境中以可持续的方式进行扩展。Orchestration平台为Minio的扩展提供了非常好的支撑。以下是各种orchestration平台的Minio部署文档Minio is a cloud-native application designed to scale in a sustainable manner in multi-tenant environments. Orchestration platforms provide perfect launchpad for Minio to scale. Below is the list of Minio deployment documents for various orchestration platforms:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Orchestration平台")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"https://docs.min.io/docs/deploy-minio-on-docker-swarm",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("Docker Swarm")]),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"https://docs.min.io/docs/deploy-minio-on-docker-compose",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("Docker Compose")]),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"https://docs.min.io/docs/deploy-minio-on-kubernetes",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("Kubernetes")]),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"https://docs.min.io/docs/deploy-minio-on-dc-os",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("DC/OS")]),e("OutboundLink")],1)])])])]),t._v(" "),e("h2",{attrs:{id:"为什么说minio是云原生的-cloud-native"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么说minio是云原生的-cloud-native"}},[t._v("#")]),t._v(" 为什么说Minio是云原生的（cloud-native）?")]),t._v(" "),e("p",[t._v("云原生这个词代表的是一些思想的集合，比如微服务部署，可伸缩，而不是说把一个单体应用改造成容器部署。一个云原生的应用在设计时就考虑了移植性和可伸缩性，而且可以通过简单的复制即可实现水平扩展。现在兴起的编排平台，想Swarm,Kubernetes,以及DC/OS，让大规模集群的复制和管理变得前所未有的简单，哪里不会点哪里。")]),t._v(" "),e("p",[t._v("容器提供了隔离的应用执行环境，编排（orchestration）平台通过容器管理以及复制功能提供了无缝的扩展。Minio继承了这些，针对每个租户提供了存储环境的隔离。")]),t._v(" "),e("p",[t._v("Minio是建立在云原生的基础上，有纠删码、分布式和共享存储这些特性。Minio专注于并且只专注于存储，而且做的还不错。它可以通过编排平台复制一个Minio实例就实现了水平扩展。")]),t._v(" "),e("blockquote",[e("p",[t._v("在一个云原生环境中，伸缩性不是应用的一个功能而是编排平台的功能。")])]),t._v(" "),e("p",[t._v("现在的应用、数据库，key-store这些，很多都已经部署在容器中，并且通过编排平台进行管理。Minio提供了一个健壮的、可伸缩、AWS S3兼容的对象存储，这是Minio的立身之本，凭此在云原生应用中占据一席之地。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static.bookstack.cn/projects/MinioCookbookZH/cf5062f51b6a2c485bcbc1625f176869.jpg",alt:"Cloud-native"}})]),t._v(" "),e("blockquote",[e("p",[t._v("原文: https://docs.min.io/docs/minio-deployment-quickstart-guide.html")])])])}),[],!1,null,null,null);o.default=n.exports}}]);