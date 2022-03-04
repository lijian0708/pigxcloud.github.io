(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{708:function(e,t,r){"use strict";r.r(t);var s=r(29),v=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"概念总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概念总结"}},[e._v("#")]),e._v(" 概念总结")]),e._v(" "),r("h2",{attrs:{id:"什么是-kubernetes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-kubernetes"}},[e._v("#")]),e._v(" 什么是 Kubernetes")]),e._v(" "),r("p",[e._v("Kubernetes 是一个开源的 Docker 容器编排系统，它可以调度计算集群的节点，动态管理上面的作业，保证它们按用户期望的状态运行。通过使用「labels」和「pods」的概念，Kubernetes 将应用按逻辑单元进行分组，方便管理和服务发现。")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/2020-04-19_22-41-06.png",alt:"整体架构"}})]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("pods：")]),e._v(" 是一组紧密关联的容器集合，它们共享 IPC(进程间通信)、Network(网络) 和 UTS namespace(UTS 命名空间是 Linux 命名空间的一个子系统，主要作用是完成对容器 Hostname 和 Domain 的隔离，同时保存内核名称、版本、以及底层体系结构类型等信息)，是 Kubernetes 调度的基本单位。")]),e._v(" "),r("li",[r("strong",[e._v("labels：")]),e._v(" 键值对(key/value)标签，可以被关联到如 Pod 这样的对象上，主要作用是给用户一个直观的感受，比如这个 Pod 是用来放置数据库的")]),e._v(" "),r("li",[r("strong",[e._v("GUI：")]),e._v(" 用户图形界面，可以是 Web 用户界面，比如使用 "),r("code",[e._v("kubernetes-dashboard")]),e._v(" 组件，用户可以通过 Dashboard 在 Kubernetes 集群中部署容器化的应用，可以查看集群中应用的运行情况，同时也能够基于 Dashboard 创建或修改部署、任务、服务等 Kubernetes 的资源。通过部署向导，用户能够对部署进行扩缩容，进行滚动更新、重启 Pod 和部署新应用。当然，通过 Dashboard 也能够查看 Kubernetes 资源的状态")]),e._v(" "),r("li",[r("strong",[e._v("kubectl：")]),e._v(" 用于管理 Kubernetes 集群的命令行工具")]),e._v(" "),r("li",[r("strong",[e._v("kube-apiserver：")]),e._v(" 提供了资源操作的唯一入口，并提供认证、授权、访问控制、API 注册和发现等机制")]),e._v(" "),r("li",[r("strong",[e._v("Kubernetes Master：")]),e._v(" Kubernetes 集群主节点，主要由 "),r("code",[e._v("kube-apiserver")]),e._v("、"),r("code",[e._v("kube-scheduler")]),e._v("、"),r("code",[e._v("kube-controller-manager")]),e._v("、"),r("code",[e._v("etcd")]),e._v(" 四个模块组成")]),e._v(" "),r("li",[r("strong",[e._v("Kubernetes Node：")]),e._v(" Kubernetes 集群子节点，主要由 "),r("code",[e._v("kubelet")]),e._v("、"),r("code",[e._v("kube-proxy")]),e._v("、"),r("code",[e._v("runtime")]),e._v(" 三个模块组成")]),e._v(" "),r("li",[r("strong",[e._v("Image Registry：")]),e._v(" 镜像仓库，比如：Ducker HUB 或 Docker 私服")])]),e._v(" "),r("h2",{attrs:{id:"kubernetes-master"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-master"}},[e._v("#")]),e._v(" Kubernetes Master")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/2020-04-19_22-41-06.png",alt:"整体架构"}})]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("kube-apiserver：")]),e._v(" 提供了资源操作的唯一入口，并提供认证、授权、访问控制、API 注册和发现等机制")]),e._v(" "),r("li",[r("strong",[e._v("kube-scheduler：")]),e._v(" 负责资源的调度，按照预定的调度策略将 Pod 调度到相应的机器上")]),e._v(" "),r("li",[r("strong",[e._v("kube-controller-manager：")]),e._v(" 负责维护集群的状态，比如故障检测、自动扩展、滚动更新等")]),e._v(" "),r("li",[r("strong",[e._v("etcd：")]),e._v(" CoreOS 基于 Raft 开发的分布式 key-value 存储，可用于服务发现、共享配置以及一致性保障（如数据库选主、分布式锁等）")])]),e._v(" "),r("h2",{attrs:{id:"kubernetes-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-node"}},[e._v("#")]),e._v(" Kubernetes Node")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/2020-04-19_22-41-07.png",alt:"img"}})]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("runtime：")]),e._v(" 负责镜像管理以及 Pod 和容器的真正运行（CRI，Container Runtime Interface），默认的容器运行时为 Docker，还支持 RKT 容器")]),e._v(" "),r("li",[r("strong",[e._v("kubelet：")]),e._v(" 负责维持容器的生命周期，同时也负责 Volume（CVI，Container Volume Interface）和网络（CNI，Container Network Interface）的管理")]),e._v(" "),r("li",[r("strong",[e._v("kube-proxy：")]),e._v(" 负责为 Service 提供 cluster 内部的服务发现和负载均衡")])]),e._v(" "),r("h2",{attrs:{id:"kubernetes-架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-架构"}},[e._v("#")]),e._v(" Kubernetes 架构")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/2020-04-19_22-41-08.png",alt:"img"}})]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/2020-04-19_22-41-09.png",alt:"img"}})])])}),[],!1,null,null,null);t.default=v.exports}}]);